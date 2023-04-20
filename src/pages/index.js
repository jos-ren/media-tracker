import Head from 'next/head'
import Image from 'next/image'
// import { SearchOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Card, Table, theme } from 'antd';
const { Header, Content, Footer } = Layout;
const { Meta } = Card;
import { tabs, movieColumns, movieData } from '../../public/data.js';

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

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
        <div>
          {/* add an input to search and add new movies */}
          {/* button to add new */}
          <div style={{ height: "100px" }}></div>
          <Table columns={movieColumns} dataSource={movieData} onChange={onChange} pagination={{ position: ["bottomCenter"] }} />
          <div style={{ height: "100px" }}></div>
        </div>
        <div style={{ border: "1px solid red" }}></div>
      </div>
      {/* <Footer style={{ textAlign: 'center' }}>Created By Josh Renema ©2023</Footer> */}

    </Layout>
  )
}
