import axios from "axios";
import type { NextPage } from "next";
import { BACKEND_URL } from "../constant";
import AuthLayout from "../layout/AuthLayout";

const ResultPage: NextPage = ({ prediction }: any) => {
  console.log(prediction);
  return (
    <AuthLayout>
      <div>ResultPage</div>
    </AuthLayout>
  );
};

getStaticProps;

export default ResultPage;

export async function getStaticProps() {
  const response = await axios.get(
    `${BACKEND_URL}/api/predictions/dd22552c-5803-4bea-8ee0-babaf0ae2fd1`,
    { headers: { Authorization: `Bearer token}` } }
  );
  const prediction = response.data;
  return {
    props: {
      prediction,
    }, // will be passed to the page component as props
  };
}
