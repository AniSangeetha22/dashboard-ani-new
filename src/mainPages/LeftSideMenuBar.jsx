import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./leftsidemenubar.css";
import {
  House,
  ShoppingCart,
  CircleUserRound,
  UsersRound,
  Users,
  ShoppingBasket,
  Store,
  BadgeEuro,
  ChartNoAxesColumnIncreasing,
  ChartLine,
  ChartColumnBig,
  ChartArea,
  Settings,
  Menu,
} from "lucide-react";

export const LeftSideMenuBar = () => {
  const [menuBar, setMenuBar] = useState(false);
  return (
    <div className="left-side-menu">
      <div className="left-admin-pages">
        <span>Admin Pages</span>
        <Link className="link-style" to="/">
          <House size={19} /> <p>Home</p>
        </Link>
        <Link className="link-style" to="addProduct">
          <ShoppingBasket size={19} /> <p>Add Product</p>
        </Link>
        <Link className="link-style" to="/products">
          <Store size={19} /> <p>Products</p>
        </Link>
        <Link className="link-style" to="/customers">
          <Users size={19} /> <p> Customers</p>
        </Link>
        <span>Online Shopping</span>
        <Link className="link-style" to="/onlineshopping">
          <ShoppingCart size={19} /> <p> Online Shopping</p>
        </Link>
        <span>Charts</span>
        <Link className="link-style" to="/areachartfile">
          <ChartArea size={19} /> <p>Area Chart</p>
        </Link>
        <Link className="link-style" to="/barchartfile">
          <ChartColumnBig size={19} /> <p>Bar Chart</p>
        </Link>
        <Link className="link-style" to="/linechartfile">
          <ChartLine size={19} /> <p>Line Chart</p>
        </Link>
      </div>
    </div>
  );
};
