import React, { useEffect } from "react";
import {
    Card,
    Image,
    Typography,
    Button,
    Checkbox,
    Form,
    Input,
    Row,
    Col,
} from "antd";
import logo from "../../logo.svg";
import { connect } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { actionLogin } from '../../store/actions/authAction';
const { Title } = Typography;

const Login = (props) => {
    const Navigate = useNavigate();
    const { actionLogin, LoginLoader } = props;
    const onFinish = (values) => {
        actionLogin(values, Navigate);
    };

    useEffect(() => {
        if (localStorage.GrandealzBackendJwtToken) {
            Navigate(`/`);
        }
    }, []);

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <div>
            <Card
                className="login-card"
                title={<Image src={logo} width={150} preview={false} />}
                style={{
                    width: 400,
                    marginBottom: "100px",
                }}
            >
                <Title level={3} style={{ textAlign: "center" }}>
                    Sign in
                </Title>
                <Form
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    size="large"
                >
                    <Row align="center" className="row-card" style={{ paddingBottom: 0 }}>
                        <Col span="24">
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        type: "email",
                                        required: true,
                                        message: "Please input your email!",
                                    },
                                ]}
                            >
                                <Input placeholder="Email" />
                            </Form.Item>
                        </Col>
                        {/* <Link to='/forgot-password'>ForgotPassword </Link> */}
                        <Col span={24}>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your password!",
                                    },
                                ]}
                            >
                                <Input.Password placeholder="Password" />
                            </Form.Item>
                        </Col>
                        {/* <Col span={12} align="left">
              <Form.Item name="remember">
                <Checkbox checked>Remember me</Checkbox>
              </Form.Item>
            </Col> */}
                        <Col span={24} align="center">
                            <Form.Item>
                                <Button loading={LoginLoader} htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Col>
                        <Col span={24} align="middle">
                            <Form.Item>
                                <Link
                                    style={{ color: "rgb(8 47 73)" }}
                                    className="link-color"
                                    to="/forgot-password"
                                >
                                    Forgot password?
                                </Link>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        LoginLoader: state.auth.LoginLoader,
    };
};

export default connect(mapStateToProps, { actionLogin })(Login);
