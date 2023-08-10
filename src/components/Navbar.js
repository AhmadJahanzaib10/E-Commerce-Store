import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Badge } from "@mui/material";
import { ShoppingBag, ShoppingCart } from "@mui/icons-material";
const Navbar = () => {
    return (
        <AppBar position="fixed" className="appBar" color="inherit">
            <Toolbar>
                <ShoppingBag />
                <Typography variant="h6" color="inherit">Shop Mart</Typography>
                <div className="gap" />
                <div className="button">
                    <IconButton aria-label="Show Cart Items" color="inherit">
                        <Badge badgeContent={3} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;