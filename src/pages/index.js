import Head from 'next/head'
import Image from 'next/image'
import { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
// import { SearchOutlined } from '@ant-design/icons';
import { Layout, Menu, Card, Table, theme, Input, Button, Space, Rate } from 'antd';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;
const { Meta } = Card;
import {
  tabs,
  // movieColumns,
  movieData
} from '../../public/data.js';

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const ImageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

export default function Home() {

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Filter
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            size="small"
            icon={<CloseOutlined />}
            onClick={() => {
              close();
            }}
          />
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const movieColumns = [
    {
      title: 'Poster',
      dataIndex: 'poster_src',
      key: 'poster_src',
      render: (poster_src) => <Image
        loader={ImageLoader}
        src={poster_src}
        width={50}
        height={75}
        style={{ objectFit: "cover" }}
      />,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      ...getColumnSearchProps('title'),
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      sorter: (a, b) => a.rating - b.rating,
      render: (rating) => <Rate disabled defaultValue={rating} />
    },
    {
      title: 'Watch Date',
      dataIndex: 'watch_date',
      key: 'watch_date',
      sorter: (a, b) => new Date(b.watch_date) - new Date(a.watch_date),
      render: (watch_date) => {
        const date = new Date(watch_date)
        return <>{date.toLocaleDateString('en-US', { dateStyle: "medium", })}</>
      },
    },
    {
      title: 'Release Date',
      dataIndex: 'release_date',
      key: 'release_date',
      sorter: (a, b) => new Date(b.release_date) - new Date(a.release_date),
      render: (release_date) => {
        const date = new Date(release_date)
        return <>{date.toLocaleDateString('en-US', { dateStyle: "medium", })}</>
      },
    },
    {
      title: 'Thoughts',
      dataIndex: 'thoughts',
      key: 'thoughts',
    },
  ];

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
