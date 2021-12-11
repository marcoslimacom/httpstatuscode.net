import Head from 'next/head'
import httpStatusCode from '../data/httpStatusCode'
import styles from '../styles/Home.module.css'

export default function Home({
  codes1xx,
  codes2xx,
  codes3xx,
  codes4xx,
  codes5xx,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>HTTP Status Code</title>
        <meta
          name="description"
          content="A simulated HTTP status API with simplicity and ease of use for developers and IT professionals."
        />
      </Head>

      <div className={styles.header}>
        <h1 id="http-status-codes">HttpStatusCode.net</h1>
        <h2 className={styles.slogan}>HTTP Status Codes</h2>
      </div>
      <div className={styles.columns}>
        <p>
          HttpStatusCode.net provides for an easy way to reference and test HTTP
          responses. You may test each individual HTTP code via
          <code>httpstatuscode.net/api/{"{code}"}</code> or by clicking the
          individual links below.
        </p>
        <div className={styles.supportedCodes}>
          Supported HTTP verbs: <br />
          <code>GET</code>
          <code>POST</code>
          <code>PUT</code>
          <code>PATCH</code>
          <code>DELETE</code>
          <code>COPY</code>
          <code>HEAD</code>
          <code>OPTIONS</code>
          <code>LINK</code>
          <code>UNLINK</code>
          <code>PURGE</code>
          <code>LOCK</code>
          <code>UNLOCK</code>
          <code>PROPFIND</code>
          <code>VIEW</code>
        </div>
      </div>
      <div className={styles.columns}>
        <ul>
          <li>
            <h2>1xx informational response</h2>
            <p>
              An informational response indicates that the request was received
              and understood. It is issued on a provisional basis while request
              processing continues. It alerts the client to wait for a final
              response. The message consists only of the status line and
              optional header fields, and is terminated by an empty line. As the
              HTTP/1.0 standard did not define any 1xx status codes, servers
              must not send a 1xx response to an HTTP/1.0 compliant client
              except under experimental conditions.
            </p>
          </li>
          {codes1xx.map((statusCode, index) => {
            return (
              <li key={index}>
                <a href={`/statuscode/${statusCode.code}`}>
                  <span>{statusCode.code}</span> {statusCode.title}
                </a>
              </li>
            );
          })}
        </ul>
        <ul>
          <li>
            <h2>2xx success</h2>
            <p>
              This class of status codes indicates the action requested by the
              client was received, understood, and accepted.
            </p>
          </li>
          {codes2xx.map((statusCode, index) => {
            return (
              <li key={index}>
                <a href={`/statuscode/${statusCode.code}`}>
                  <span>{statusCode.code}</span> {statusCode.title}
                </a>
              </li>
            );
          })}
        </ul>
        <ul>
          <li>
            <h2>3xx redirection</h2>
            <p>
              This class of status code indicates the client must take
              additional action to complete the request. Many of these status
              codes are used in URL redirection.
              <br />A user agent may carry out the additional action with no
              user interaction only if the method used in the second request is
              GET or HEAD. A user agent may automatically redirect a request. A
              user agent should detect and intervene to prevent cyclical
              redirects.
            </p>
          </li>
          {codes3xx.map((statusCode, index) => {
            return (
              <li key={index}>
                <a href={`/statuscode/${statusCode.code}`}>
                  <span>{statusCode.code}</span> {statusCode.title}
                </a>
              </li>
            );
          })}
        </ul>
        <ul>
          <li>
            <h2>4xx client errors</h2>
            <p>
              This class of status code is intended for situations in which the
              error seems to have been caused by the client. Except when
              responding to a HEAD request, the server should include an entity
              containing an explanation of the error situation, and whether it
              is a temporary or permanent condition. These status codes are
              applicable to any request method. User agents should display any
              included entity to the user.
            </p>
          </li>
          {codes4xx.map((statusCode, index) => {
            return (
              <li key={index}>
                <a href={`/statuscode/${statusCode.code}`}>
                  <span>{statusCode.code}</span> {statusCode.title}
                </a>
              </li>
            );
          })}
        </ul>
        <ul>
          <li>
            <h2>5xx server errors</h2>
            <p>
              The server failed to fulfil a request.
              <br />
              Response status codes beginning with the digit 5 indicate cases in
              which the server is aware that it has encountered an error or is
              otherwise incapable of performing the request. Except when
              responding to a HEAD request, the server should include an entity
              containing an explanation of the error situation, and indicate
              whether it is a temporary or permanent condition. Likewise, user
              agents should display any included entity to the user. These
              response codes are applicable to any request method.
            </p>
          </li>
          {codes5xx.map((statusCode, index) => {
            return (
              <li key={index}>
                <a href={`/statuscode/${statusCode.code}`}>
                  <span>{statusCode.code}</span> {statusCode.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const codes1xx = [];
  const codes2xx = [];
  const codes3xx = [];
  const codes4xx = [];
  const codes5xx = [];
  Object.keys(httpStatusCode).forEach((key, index) => {
    const statusCode = httpStatusCode[key];
    const initialCode = key.toString().charAt(0);

    switch (initialCode) {
      case "1":
        codes1xx.push({ code: key, title: statusCode.title });
        break;

      case "2":
        codes2xx.push({ code: key, title: statusCode.title });
        break;

      case "3":
        codes3xx.push({ code: key, title: statusCode.title });
        break;

      case "4":
        codes4xx.push({ code: key, title: statusCode.title });
        break;
    
      default:
        codes5xx.push({ code: key, title: statusCode.title });
        break;
    }
  })

  return {
    props: {
      codes1xx,
      codes2xx,
      codes3xx,
      codes4xx,
      codes5xx
    },
  };
}