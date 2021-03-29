import { React } from "react";
import { Layout, Row, Col, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import MoviesInput from "../Movies Input Search/Input";

const { Header } = Layout;

export const PageHeader = () => {
	return (
		<Header className="header fixed">
			<Row>
				<Col span={6}>
					<div style={{ color: "white" }}>asdasdasd</div>
				</Col>
			</Row>
			<Row className="child-header">
				<Col span={12} offset={9} id="center">
					<Button shape="circle" icon={<SearchOutlined />}></Button>
					{/* <MoviesInput /> */}
				</Col>
			</Row>
		</Header>
	);
};
