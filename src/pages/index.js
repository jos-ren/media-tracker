import Head from 'next/head'
import Image from 'next/image'
// import { SearchOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Card, theme } from 'antd';
const { Header, Content, Footer } = Layout;
const { Meta } = Card;
import { tabs } from '../../public/data.js';

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

export default function Home() {

  return (
    <Layout>
      <Head>
        <title>Media Tracker</title>
        <meta name="description" content="" />
        {/* <link rel="icon" href="./icons/logo.png" /> */}
      </Head>
      <Header
        style={{
          position: 'fixed',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: "flex",
          justifyContent: "center",
          alignItems: "center"

        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          items={tabs.map((o) => ({
            key: o.key,
            label: o.title,
          }))}
        // style={{border:"1px solid red"}}
        />
      </Header>

      <div style={{
        paddingTop: "64px",
        display: 'grid',
        gridTemplateColumns: '1fr 4fr 1fr',
        gridColumnGap: '20px',
        gridRowGap: '20px',
        // height: 'calc(100vh-64px)'
      }}>
        <div style={{ border: "1px solid red" }}></div>
        {/* search autocomplete databases */}
        {/* add import spotify/imdb/etc... library? */}
        {/* button to add */}
        {/* grid of cards */}
        {/* <Image
            // loader={myLoader}
            src="https://m.media-amazon.com/images/I/71QcRDosnsL._AC_SL1500_.jpg"
            alt="movie title"
            width={200}
            height={300}
          /> */}
        <div style={{
          // display: 'grid',
          // gridTemplateColumns: 'repeat(5, 1fr)',
          // // gridColumnGap: '20px',
          // gridRowGap: '20px',
          // height: '100%',
          display: "flex",
          justifyContent:"center",
          flexWrap: "wrap",
          gap:"20px",
          border: "1px solid blue"
        }}>
          {new Array(20).fill(null).map((_, index) => {
            const key = index + 1;
            return (
              <Card
                hoverable
                style={{ width: 200 }}
                cover={<img alt="example" src="https://m.media-amazon.com/images/I/71QcRDosnsL._AC_SL1500_.jpg" />}
              >
                <Meta title={index} />
              </Card>
            )
          })}
        </div>
        <div style={{ border: "1px solid red" }}></div>
      </div>
      {/* <Footer style={{ textAlign: 'center' }}>Created By Josh Renema ©2023</Footer> */}

    </Layout>
  )
}
