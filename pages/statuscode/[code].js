import Head from 'next/head';
import httpStatusCode from '../../data/httpStatusCode'
import styles from '../../styles/Home.module.css'

function Code({ statusCode }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          {statusCode.code} {statusCode.title} - HTTP Status Code
        </title>
        <meta
          name="description"
          content={`${statusCode.code} ${
            statusCode.title
          } - ${statusCode.description.substring(200, 0)}`}
        />
      </Head>

      <div className={styles.header}>
        <a href={`/api/${statusCode.code}`}>
          <h1 id="http-status-codes">{statusCode.code}</h1>
          <h2 className={styles.slogan}>{statusCode.title}</h2>
        </a>
      </div>
      <div className={styles.columns}>
        <p dangerouslySetInnerHTML={{ __html: statusCode.description }}></p>
      </div>
      <div className={styles.columns}>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const codes = [];
  Object.keys(httpStatusCode).forEach((key) => {
    codes.push(key.toString());
  });

  return {
    paths: codes.map((code) => `/statuscode/${code}`),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const statusCode = {
    code: params.code,
    title: httpStatusCode[params.code].title,
    description: httpStatusCode[params.code].description,
  };
  return {
    props: { statusCode },
  };
}

export default Code;