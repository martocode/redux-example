import { FilterTwoTone, SearchOutlined } from "@ant-design/icons";
import { Layout, Menu, Radio, AutoComplete, Divider, Button } from "antd";
import { useContext, useEffect, useState } from "react";
import {
	setFilterType,
	setinputStatus,
} from "../../Services/Global/Loading.reducer";
import { updateFilter } from "../../Services/Movies/movies.reducer";
import { MoviesContext } from "../MyContext/MyContext";

const { SubMenu } = Menu;
const { Sider } = Layout;

const SideMenu = () => {
	const { states, dispatch } = useContext(MoviesContext),
		{
			global: { filterType },
			movies: { fetch, filter },
		} = states;

	const [getInput, setInput] = useState(""),
		[getOptions, setOptions] = useState([]),
		[openKeys, setOpenKeys] = useState(["sub1"]);

	const opt = ["Title", "Year"];

	const inputFilter = (input) => {
		const lowerCased = input.toLowerCase().trim();
		const filtered =
			lowerCased === ""
				? fetch
				: fetch.filter((data) =>
						data[filterType].toLowerCase().includes(lowerCased)
				  );
		return updateFilter(filtered);
	};

	const GetSelections = () =>
		opt.map((v, k) => (
			<Radio.Button key={k} value={v}>
				{v}
			</Radio.Button>
		));

	const switchOptions = () =>
		filter.map((v, key) => {
			return { key, value: v[filterType] };
		});

	const onOpenChange = (key) => setOpenKeys(key);

	const radioUpdate = ({ target: { value } }) =>
		dispatch(setFilterType(value));

	const inputUpdate = (value) =>
		setInput(
			value
				? value === "" || getInput === "" || value[0] === " "
					? value.trim()
					: value
				: ""
		);

	useEffect(() => {
		dispatch(setinputStatus(getInput));
	}, [getInput]);

	useEffect(() => {
		setOptions(switchOptions());
	}, [filterType, filter]);

	return (
		<Sider className="sider">
			<Menu
				mode="inline"
				style={{ height: "100%" }}
				openKeys={openKeys}
				onOpenChange={onOpenChange}
			>
				<SubMenu
					key="sub1"
					className="filter-card"
					icon={<FilterTwoTone />}
					title="Filters"
				>
					<div className="filter-inner">
						<p>Show Me</p>
						<Radio.Group
							defaultValue="Title"
							buttonStyle="solid"
							onChange={radioUpdate}
						>
							<GetSelections />
						</Radio.Group>
					</div>
					<Divider />
					<div className="filter-inner">
						<p>Filter</p>
						<AutoComplete
							allowClear
							className="movies input"
							value={getInput}
							placeholder="Search"
							options={getOptions}
							onChange={inputUpdate}
						/>
					</div>
				</SubMenu>
				<Button
					type="primary"
					shape="round"
					icon={<SearchOutlined />}
					size="large"
					onClick={() => dispatch(inputFilter(getInput))}
				/>
			</Menu>
		</Sider>
	);
};

export default SideMenu;
