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
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          items={tabs.map((o) => ({
            key: o.key,
            label: o.title,
          }))}
        />
      </Header>
      <Content>
        <div className="content">
          {/* search autocomplete databases */}
          {/* button to add */}
          <br />
          <br />
          <br />
          {/* grid of cards */}
          {/* <Image
            // loader={myLoader}
            src="https://m.media-amazon.com/images/I/71QcRDosnsL._AC_SL1500_.jpg"
            alt="movie title"
            width={200}
            height={300}
          /> */}
          <Card
            hoverable
            style={{ width: 200 }}
            cover={<img alt="example" src="https://m.media-amazon.com/images/I/71QcRDosnsL._AC_SL1500_.jpg" />}
          >
           <Meta title="Spiderman" />
          </Card>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Created By Josh Renema ©2023</Footer>

    </Layout>
  )
}
