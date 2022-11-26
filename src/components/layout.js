import React from "react"
import { Layout } from 'antd';
import Headers from "./Header"
import Footer from "./Footer"

const { Content } = Layout;

const Layouts = ({ children }) => {

  return (
    <Layout>
      <Headers />
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <div className="site-layout-content">
          {children}
        </div>
      </Content>
      <Footer />
    </Layout >
  )
}

export default Layouts;
