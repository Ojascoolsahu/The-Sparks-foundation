import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    var stylingObject = {
        bg: {
            backgroundImage:`url(https://media.gettyimages.com/photos/view-of-the-world-bank-building-october-5-2000-in-washington-dc-the-picture-id1609463?k=20&m=1609463&s=612x612&w=0&h=OIrjTo0Ib7s8V8hoJDNVObesW9_BiSS9slPHCFm08Po=)`
        },
        center:{
            display:"inline-block",
            position: "fixed",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            width: "500px",
            height: "100px",
            margin: "auto",
            textAlign  :'center'
            // backgroundColor: "#f3f3f3",
        },
        text:{
            color: "black"
        },
        btn: {
            color: "white",
            textColor: "white",
        },
        link: {
            textDecoration : "none",
            color : "white"
        },
        image: {
            width: "100vw",
            height:"91vh"
        }
    }
    return (
        <>
            <img src="https://see.news/wp-content/uploads/2020/07/World-Bank-1140x570.jpg" style={stylingObject.image}alt="" />
        <div style={stylingObject.bg}>
            <div style={stylingObject.center}> <div style={stylingObject.text}> <h2> <b> Welcome to the WORLD'S BANK</b> </h2>
            </div>
            <div> <button className="btn btn-primary" style={stylingObject.btn}> <Link  style={stylingObject.link} to="/view">EXPLORE</Link> </button> </div></div>
            </div>
            </>
    )
}

export default Home
