import { GetStaticProps } from "next"
import Link from "next/link"

export default function GitHub({ org, members }) {
  console.log(members)
  return (
    <div>
      <h1>{org.login}</h1>
      <h3>{org.description}</h3>

      <p>Site: <a href={org.site} target="_blank">{org.site}</a></p>

      <ul>
        {members.map(member => (
          <li key={member} style={{listStyle: "none", margin: "0.5rem 0"}}>
            <Link href={`/github/${member}`}>
              <a href={`/github/${member}`}>{member}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const responseOrg = await fetch('https://api.github.com/orgs/rocketseat')
  const dataOrg = await responseOrg.json()
  const org = {
    login: dataOrg.login,
    description: dataOrg.description,
    site: dataOrg.blog,
  }

  const responseMembers = await fetch('https://api.github.com/orgs/rocketseat/members')
  const dataMenbers = await responseMembers.json()
  const members = dataMenbers.map(member => {
    return member.login
  })

  return {
    props: {
      org,
      members,
    },
    revalidate: 10,
  }
}