import React from 'react'
import {
	Button,
	Container,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	Typography
} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete";

const Import = (props) => {
	return (
		<Container style={{ margin: '4em'}}>
			<Button style={{ marginBottom: '1.5em' }} variant='contained' color='primary' onClick={props.fetchMakes}>Import</Button>
			<Typography variant='h4' component='h1' >
				Count: {props.makes.length}
			</Typography>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>ID</TableCell>
						<TableCell>Make</TableCell>
						<TableCell>Actions</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{/* map 'makes' array from state */}
					{props.makes.map((carMake, index) => {
						return (
							<TableRow key={carMake.MakeId}>
								<TableCell>{carMake.MakeId}</TableCell>
								<TableCell>{carMake.MakeName}</TableCell>
								<TableCell>
									<DeleteIcon
										// add onClick method here
										onClick={() => props.deleteMake(index)}
										className="icon text-red" />
								</TableCell>
							</TableRow>
						)
					})}
				</TableBody>
			</Table>
		</Container>
	)
}

export default Import