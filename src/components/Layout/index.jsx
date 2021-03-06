import styled from 'styled-components';
import { Layout, Menu, Breadcrumb, Badge } from 'antd';
import { useRouter } from 'next/router';
const { Header, Content, Footer } = Layout;
import { MessageOutlined, BellOutlined, UserOutlined } from '@ant-design/icons';

const route = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Q&A",
    url: "/QnA",
  },
  {
    title: "Tech",
    url: "/tech",
  },
  {
    title: "커뮤니티",
    url: "/community",
  },
  {
    title: "칼럼",
    url: "/columns",
  },
  {
    title: "Job",
    url: "/job",
  },
  {
    title: "게시판",
    url: "/board",
  }, {
    title: "로그인",
    url: "/accounts/login",
  }
];


const LayoutComponent = (props) => {
  const router = useRouter();
  const routerAsPath = router.asPath.split("/");

  const cnt = {
    commentNotReadCnt: 1,
    boardNotReadCnt: 2,
    followNotReadCnt: 3,
  };

  return (
    <Layout className={props.className}>

      <Header className="header">

        <div className="logo" />

        <Menu className="main-menu" theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          {route.map((i) => <Menu.Item key={i.url} onClick={() => { router.push(i.url) }}>{i.title}</Menu.Item>)}
        </Menu>

        <Menu className="alert-menu" theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item onClick={() => { }}>
            <Badge count={cnt.commentNotReadCnt}>
              <a href="#" className="head-example" ><MessageOutlined /></a>
            </Badge>
          </Menu.Item>
          <Menu.Item onClick={() => { }}>
            <Badge count={cnt.boardNotReadCnt}>
              <a href="#" className="head-example" ><BellOutlined /></a>
            </Badge>
          </Menu.Item>
          <Menu.Item onClick={() => { }}>
            <Badge count={cnt.followNotReadCnt}>
              <a href="#" className="head-example" ><UserOutlined /></a>
            </Badge>
          </Menu.Item>
        </Menu>

      </Header>

      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          {routerAsPath.map((d, k) => <Breadcrumb.Item key={k}>{d}</Breadcrumb.Item>)}
        </Breadcrumb>
        {props.children}
      </Content>

      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      
    </Layout>
  )
}

export default styled(LayoutComponent)`
  & {
    .header {
      display: flex;
      
      .logo { flex-shrink: 0;}
      .main-menu { flex-shrink: 1; width: 100%; }
      .alert-menu { flex-shrink: 0; }
    }
  }
`;