import 'antd/dist/antd.css'
import { Breadcrumb, Layout, Menu } from 'antd'
import styles from '../styles/Layout.module.css'
import Head from 'next/head'
import { useRouter } from 'next/router'

const { Header, Content, Footer } = Layout
const pageMap = {
  tables: 'Задание 1',
  time: 'Задание 2'
}

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (<Layout className={styles.layout}>
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" selectedKeys={[router.pathname]} onSelect={({key}) => router.push(key)}>
        <Menu.Item key="/">Главная</Menu.Item>
        <Menu.Item key="/tables">Задание 1</Menu.Item>
        <Menu.Item key="/time">Задание 2</Menu.Item>
      </Menu>
    </Header>
    <Head>
      <title>Тестовые задания</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item onClick={() => router.push('/')}>Главная страница</Breadcrumb.Item>
        {
          router.pathname.split('/').map((pathPart, idx) => <Breadcrumb.Item key={idx}>{pageMap[pathPart] || pathPart}</Breadcrumb.Item>)
        }
      </Breadcrumb>
      <Component {...pageProps} />
    </Content>
    <Footer style={{ textAlign: 'center' }}>EvilOn ©2021</Footer>
  </Layout>)
}

export default MyApp
