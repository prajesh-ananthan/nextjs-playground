import {useRouter} from "next/router";
import Link from "next/link";

function ClientProjectPage() {

  const clients = [
    {id: "prajesh", name: "Prajesh"},
    {id: "ananthan", name: "Ananthan"}
  ];
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The Clients Page</h1>

      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ClientProjectPage;