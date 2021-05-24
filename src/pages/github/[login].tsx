import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

export default function Member({ user }) {
  const router = useRouter();

  if(router.isFallback) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      <img src={user.avatar_url} alt={user.name} style={{width: 80, borderRadius: 40}} />
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
      <button onClick={() => router.back()}>Voltar</button>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // const response = await fetch('https://api.github.com/orgs/rocketseat/members')
  // const data = await response.json()

  // const paths = data.map(member => {
  //   return { params: { login: member.login } }
  // })

  return {
    paths: [{ params: { login: 'diego3g' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { login } = context.params;

  const response = await fetch(`https://api.github.com/users/${login}`)
  const data = await response.json()

  return {
    props: {
      user: data,
    },
    revalidate: 20,
  }
}