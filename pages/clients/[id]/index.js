import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script"
import Layout from "../../../components/layout"

function ClientProjectPage() {
  const router = useRouter();
  console.log(router.query);
  return (
      <Layout>
      <Head>
          <title>thi is client head</title>
      </Head>
      {/* <Script src="https://connect.facebook.net/en_US/sdk.js"
      strategy="lazyOnload"
      onLoad={()=>
          console.log("Script load correctly, FB has been loaded!")
      }></Script> */}
    <div>
      <h1>The projects page of a given client</h1>
      <h2>
          <Link href="/blog"><a>Back to blog home</a></Link>
      </h2>
      <h2>
          <Image src="/images/profile.jpg" width={144} height={144}></Image>
      </h2>
    </div>
    </Layout>
  );
}

export default ClientProjectPage;
