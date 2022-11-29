import React from "react";
import Layouts from "@components/layout"
import Slider from "@components/Home/Slider"
import Courses from "@components/Home/Courses"


function Home() {

    return (
        <Layouts>
            <Slider />
            <Courses />
        </Layouts>

    );
};

export default Home;