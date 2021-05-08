import {useRouter} from 'next/router' // Is this a react hook?

function PortfolioProjectPage() {
  const router = useRouter();
  console.log(router);
  console.log(router.query)

  return(
    <div>
      <h1>The Portfolio Project page</h1>
    </div>
  );
}

export default PortfolioProjectPage;