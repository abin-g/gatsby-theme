import React from "react"
import { Layout } from 'antd';
import Headers from "./Header"
import Footer from "./Footer"

const { Content } = Layout;

const Layouts = ({ children }) => {

  return (
    <Layout>
      <Headers />
      <Content>
        {children}
      </Content>
      <Footer />
    </Layout >
  )
}

export default Layouts;
