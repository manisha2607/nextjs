import Image from "next/image";
import Link from "next/link";
import Layout from "./component/layout";

export default function Home() {
  return (
    <Layout>
     
       <h1> Home Page</h1>
      <Link href="/login">login</Link>
      <Link href="/signup">signup</Link>
   
    
    </Layout>
  );
}
