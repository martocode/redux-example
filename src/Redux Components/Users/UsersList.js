import { Button, Input, Row, Col } from "antd";
import { connect } from "react-redux";

import { addNumber, minusNumber } from "../../Services/Users/users.reducer";
import BillsList from "../Billings/BillsList";
// import configureStore from "../../Store/store";
// const store = configureStore();

const UsersTable = (props) => {
	console.log("UsersTable", props);
	return (
		<>
			<Row>
				<Col span={11} offset={4}>
					<Input placeholder="Basic usage" />
				</Col>
			</Row>
			<Button onClick={() => props.dispatch(addNumber(1))} type="primary">
				Plus Button {props.state.users}
			</Button>
			{/* <br />
			<br /> */}
			<Button
				onClick={() => props.dispatch(minusNumber(1))}
				type="primary"
			>
				Minus Button {props.state.users}
			</Button>
			<BillsList />
		</>
	);
};

const mapStateToProps = function (state) {
	return {
		state,
	};
};

export default connect(mapStateToProps)(UsersTable);