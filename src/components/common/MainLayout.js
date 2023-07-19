import {
    DashboardOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    EditOutlined,
    UserOutlined,
    PictureOutlined,
    PrinterOutlined,
    ShoppingCartOutlined,
} from "@ant-design/icons";
import { Col, Image, Layout, Menu, Row, Typography } from "antd";
import React, { useMemo, useState } from "react";
import { connect } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../logo.svg";
import logo1 from "../../assets/img/common/logo.svg";
import { logoutUser } from "../../store/actions/authAction";
const { Header, Content, Footer, Sider } = Layout;

const MainLayout = (props) => {
    const { logoutUser, userProfileData } = props;
    const navigate = useNavigate();
    const history = useLocation()

    const [collapsed, setCollapsed] = useState(false);
    const [keyName, setKeyName] = useState("1");

    useMemo(() => {
        if (history.pathname === "/") {
            setKeyName("1");
        } else if (history.pathname === "/test") {
            setKeyName("2");
        } else if (history.pathname === "/draws") {
            setKeyName("3");
        } else if (history.pathname === "/users") {
            setKeyName("4");
        } else if (history.pathname === "/coupans") {
            setKeyName("5");
        } else if (history.pathname === "/orders") {
            setKeyName("6");
        } else if (history.pathname === "/campaign") {
            setKeyName("7");
        } else setKeyName("1");
    }, [history]);

    const itemData = [
        {
            key: "1",
            icon: <DashboardOutlined style={{ fontSize: "20px" }} />,
            label: <NavLink to="/">Dashboard</NavLink>,
        },
        {
            key: "2",
            icon: <PictureOutlined style={{ fontSize: "20px" }} />,
            label: <NavLink to="/banner">Banner</NavLink>,
        },
        {
            key: "3",
            icon: <PrinterOutlined style={{ fontSize: "20px" }} />,
            label: <NavLink to="/draws">Draws</NavLink>,
        },
        {
            key: "4",
            icon: <UserOutlined style={{ fontSize: "20px" }} />,
            label: <NavLink to="/users">Users</NavLink>,
        },

    ];

    return (
        <Layout id="main-layout">
            <Sider
                style={{
                    display: `${history.pathname === "/login" ||
                        history.pathname === "/forgot-password" ||
                        history.pathname === "/reset-password" ||
                        history.pathname === "/reset-password/"

                        ? "none"
                        : ""
                        }`,
                }}
                className="sidebar"
                breakpoint="lg"
                collapsedWidth="0"
                trigger={null}
                collapsible
                collapsed={collapsed}
                onBreakpoint={(broken) => {
                    //console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    //console.log(collapsed, type);
                }}
            >
                <div className="logo">
                    <Image preview={false} src={logo1} />
                </div>
                <Row>
                    <Col span={24} align="middle">
                        <Image
                            preview={false}
                            src={logo}
                            width={100}
                            className="admin-icon"
                            fallback="data:image/png;base64,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"
                        />
                    </Col>
                    <Col span={24} align="middle">
                        <Typography.Title
                            level={4}
                            style={{
                                margin: 0,
                                color: "white",
                            }}
                        >
                            John Doe
                            <Link style={{ color: 'white' }} to='/edit-profile' ><EditOutlined /></Link>
                        </Typography.Title>
                    </Col>
                    <Col span={24} align="middle">
                        <Typography.Text
                            style={{
                                margin: 0,
                                color: "white",
                            }}
                        >
                            johndoe@gmail.com
                        </Typography.Text>
                    </Col>
                    <Col span={24} align="middle">
                        <NavLink to="/change-password">
                            <Typography.Title
                                level={5}
                                style={{
                                    margin: "10px 0",
                                    color: "white",
                                }}
                            >
                                Change Password
                            </Typography.Title>
                        </NavLink>
                    </Col>
                </Row>
                <Menu
                    id="overflow-menu"
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[keyName]}
                    items={itemData}
                />
                <Row
                    style={{
                        position: "absolute",
                        left: "30%",
                        bottom: "5%",
                    }}
                >
                    <Col
                        onClick={() => logoutUser(navigate)}
                        span={24}
                        align="middle"
                        style={{
                            color: "white",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                        }}
                    >
                        <LogoutOutlined style={{ fontSize: "20px", marginRight: "5px" }} />{" "}
                        Logout
                    </Col>
                </Row>
            </Sider>
            <Layout>
                <Header
                    className="site-layout-sub-header-background"
                    style={{
                        padding: 0,
                        display: `${history.pathname === "/login" ||
                            history.pathname === "/forgot-password" ||
                            history.pathname === "/reset-password" ||
                            history.pathname === "/reset-password/"
                            ? "none"
                            : ""
                            }`,
                    }}
                >
                    {history.pathname === "/login" ||
                        history.pathname === "/forgot-password" ||
                        history.pathname === "/reset-password/" ||
                        history.pathname === "/reset-password" ? (
                        ""
                    ) : (
                        <Row>
                            <Col span={3} align="left">
                                {React.createElement(
                                    collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                                    {
                                        className: "trigger",
                                        onClick: () => setCollapsed(!collapsed),
                                    }
                                )}
                            </Col>
                            {/* <Col span={20} align="right">
                  <Image src={notification} preview={false} />
                </Col> */}
                        </Row>
                    )}
                </Header>
                <Content
                    style={{
                        margin: "24px 16px 0",
                        height: `${history.pathname === "/login" ||
                            history.pathname === "/forgot-password" ||
                            history.pathname === "/reset-password" ||
                            history.pathname === "/reset-password/"

                            ? "100vh"
                            : " calc(100vh - 80px)"
                            }`,
                        overflowY: "auto",
                    }}
                >
                    <div
                        id={
                            history.pathname === "/login" ||
                                history.pathname === "/forgot-password" ||
                                history.pathname === "/reset-password" ||
                                history.pathname === "/reset-password/"

                                ? "content-full"
                                : ""
                        }
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        {props.children}
                    </div>
                </Content>
                {/* <Footer
          style={{
            textAlign: "center",
          }}
        >
          ©2022 Created by Vytech Enterpise
        </Footer> */}
            </Layout>
        </Layout>
    );
};

const mapStateToProps = (state) => {
    return {
        userProfileData: state.auth.userProfileData,
    };
};
export default connect(mapStateToProps, {
    logoutUser,
})(MainLayout);
