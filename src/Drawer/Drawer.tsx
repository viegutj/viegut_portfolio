import {
    Drawer,
    List,
    ListItem,
    // ListItemIcon,
    ListItemText,
    Button,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from 'react';
// import {Link, useHistory} from "react-router-dom/cjs/react-router-dom";

function DrawerComponent() { // we are setting a piece of state to determine if the drawer is open
    const [open, setOpen] = useState(false);
    // const history = useHistory();

    const list = () => (
        <div 
        style={{width: 250}}
        onClick={() => setOpen(false)
        }>
            {/* this is a list of what is in our drawer */}
            <List> {
                [
                    <Typography 
                    // onClick={() => history.push('/')}
                    > 
                        Home 
                    </Typography>,
                    <Typography 
                    // onClick={() => history.push('/projects')}
                    > 
                        Projects 
                    </Typography>,
                    <Typography 
                        // onClick={() => history.push('/linkedin')}
                    > 
                        LinkedIn 
                    </Typography>,
                    <Typography 
                        // onClick={() => history.push('/github')}
                    > 
                        GitHub 
                    </Typography>,
                    <Typography 
                        // onClick={() => history.push('/email')}
                    > 
                        Email 
                    </Typography>,
                ].map((label, index) => (
                    <ListItem button
                        key={index}>
                        {/* <ListItemIcon></ListItemIcon> */}
                        <ListItemText primary={label}/>
                    </ListItem>
                ))
            } </List>
        </div>

    )

    return (
        <div>
            <Button 
            variant="contained"
            style={{float: 'right', color: "blue", textDecoration: ''}}
            onClick={() => {setOpen(true)}}>
                <MenuIcon/>
            </Button>
            <Drawer 
            open={open}
            anchor={'left'}
            onClose={() => setOpen(false)}>
                {list()} 
            </Drawer>
        </div>
    )
}

export default DrawerComponent;
