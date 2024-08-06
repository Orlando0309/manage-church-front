"use client"
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Layout, Menu, theme } from "antd";
import Link from "next/link";
import { items } from "./item";
import { useRouter } from "next/navigation";
import { GlobalProvider } from "@/components/provider/GlobalProvider";
import { RootCodeProvider } from "@/components/provider/RootCodeProvider";

const { Header, Sider, Content, Footer } = Layout;
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const router = useRouter();

  // notification

  return (
    <Layout /* onContextMenu={(e) => e.preventDefault()} */>
      <GlobalProvider>
        <RootCodeProvider>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <div className="text-white fs-5 text-center py-3 mb-0">
              <span className="sm-logo">GW</span>
              <span className="lg-logo">MC</span>
            </div>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[""]}
            onClick={({ key }) => {
              if (key === "signout") {
              } else {
                // navigate through page here
                router.push(key);
              }
            }}
            items={items}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="d-flex justify-content-between ps-1 pe-5"
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
            <div className="d-flex gap-5 align-items-center">

              <div className="d-flex gap-3 align-items-center dropdown">
                <div>
                  {/* <img
                  width={32}
                  height={32}
                  src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg"
                  alt=""
                /> */}
                </div>
                <div
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <h5 className="mb-0">Manage Church</h5>
                  <p className="mb-0">{""} </p>
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <Link
                      className="dropdown-item py-1 mb-1"
                      style={{ height: "auto", lineHeight: "20px" }}
                      href="/"

                    >
                      View Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item py-1 mb-1"
                      style={{ height: "auto", lineHeight: "20px" }}
                      href="/"
                      onClick={() => { window.location.href = "/" }}
                    >
                      Signout
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: '7px'
            }}
          >
            <ToastContainer
              position="top-right"
              autoClose={250}
              hideProgressBar={false}
              newestOnTop={true}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              theme="light"
            />
            {children}
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Orlando ©2024 Created by Ant UED
          </Footer>
        </Layout>
        </RootCodeProvider>
      </GlobalProvider>


    </Layout>
  );
};