// components import
import CourseCard from "../CourseCard/CourseCard";
import LibraryCard from "../LibraryCard/LibraryCard";

// styles import 
import "./main.css";

// assets import 
import banner from "./../../assets/banner.png";
import bannerMobile from './../../assets/banner_mobile.png'
import calculus from "./../../assets/calculus.png";
import algebra from "./../../assets/algebra.png";
import ringTheory from "./../../assets/ringtheory.png";
import partialEquations from "./../../assets/partialequations.png";

const Main = () => {
    const courses = [
        {
            name: "Calculus",
            img: calculus,
            content:
                "Calculus .. Normally it is a 1st year paper in the curriculum....",
            videos: 112,
            notes: 115,
            educator: 2,
        },
        {
            name: "Ring Theory and Linear Alebra - II",
            img: ringTheory,
            content: "Ring Theory and Linear Algebra II.....",
            videos: 112,
            notes: 115,
            educator: 2,
        },
        {
            name: "Algebra",
            img: algebra,
            content:
                "Algebra .. Normally it is a 1st year paper in the curriculum....",
            videos: 112,
            notes: 115,
            educator: 2,
        },
        {
            name: "Partial Differential Equations",
            img: partialEquations,
            content: "matches 98% with your course....",
            videos: 112,
            notes: 115,
            educator: 2,
        },
    ];

    const library = [
        {
            name: "MECHANICS",
            type: "CORE",
            color: "#FD4747",
        },
        {
            name: "MATHEMATICAL PHYSICS -I",
            type: "CORE",
            color: "#FD8947",
        },
        {
            name: "RENEWABLE ENERGY AND ENERGY HARVESTING",
            type: "AECC",
            color: "#AD47FD",
        },
        {
            name: "APPLIED OPTICS",
            type: "AECC",
            color: "#D2116E",
        },
        {
            name: "ELECTRICITY AND MAGNETISM",
            type: "DSC",
            color: "#FDB447",
        },
        {
            name: "NUCLEAR AND PARTICLE PHYSICS",
            type: "DSC",
            color: "#04AF72",
        },
    ];

    return (
        <div className="main_container">
            <div className="banner">
                <img src={banner} alt="" />
            </div>
            <div className="banner__mobile">
                <img src={bannerMobile} alt="" />
            </div>
            <section className="section1">
                <div className="header container">
                    <h1>Semester Courses</h1>
                    <p>See All</p>
                </div>
                <div className="courses__container">
                    {courses.map((course, index) => (
                        <CourseCard key={index} course={course} />
                    ))}
                </div>
            </section>
            <section className="section2">
                <div className="header container">
                    <h1>Library</h1>
                    <p>See All</p>
                </div>
                <div className="library__container">
                    {library.map((course, index) => (
                        <LibraryCard key={index} course={course} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Main;
