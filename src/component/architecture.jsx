import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Architechure from "../assets/img3/architechure.svg";
import deviceIcon from "../assets/img3/deviceicon.svg"; 
import "../assets/css/iotarchitecture.css"; // custom CSS file

const IotArchitecture = () => {
    return (
        <div className="iot-bg py-5 text-center">
            {/* Title */}
            <h3
                className="fw-bold text-white mb-5"
                style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "clamp(20px, 4vw, 36px)", // responsive title
                }}
            >
                IoT System Architecture
            </h3>

            {/* Center Circle with Laptop */}
            <div className="position-relative d-flex justify-content-center align-items-center">
                <div className="col-lg-12 col-md-12 d-flex justify-content-center mt-5">
                    <img
                        src={Architechure}
                        alt="Laptop"
                        className="rounded-4 laptop-bg-animation"
                        style={{ maxHeight: "700px" }}
                    />
                </div>
            </div>

            {/* Bottom Info Section */}
            <div className="row mt-0 mx-lg-5 text-start col-12 p-lg-5 mx-2">
                <div className="col-md-4 mb-4">
                    <h5
                        className="d-flex align-items-center text-white"
                        style={{ fontSize: "clamp(16px, 2.5vw, 20px)" }}
                    >
                        <img src={deviceIcon} alt="Devices" className="icon-left" />
                        Devices and Sensors
                    </h5>
                    <p
                        className="text-white"
                        style={{
                            fontSize: "clamp(13px, 2.2vw, 16px)",
                            lineHeight: "150%",
                        }}
                    >
                        Responsible for interactions between the system and the environment
                        (or a process) by performing two main functions: collecting data about
                        the current state of the system (sensors) and changing the physical or
                        logical state of the system or the environment (actuators).
                    </p>
                </div>

                <div className="col-md-4 mb-4">
                    <h5
                        className="d-flex align-items-center text-white"
                        style={{ fontSize: "clamp(16px, 2.5vw, 20px)" }}
                    >
                        <img src={deviceIcon} alt="Connectivity" className="icon-left" />
                        Connectivity
                    </h5>
                    <p
                        className="text-white"
                        style={{
                            fontSize: "clamp(13px, 2.2vw, 16px)",
                            lineHeight: "150%",
                        }}
                    >
                        Standard Wireless Access: Wi-Fi, 2G, 3G, 4G LTE, 5G. Private Long Range:
                        LoRa-based platform, Zigbee, and SigFox. Mobile IoT Technologies: LTE-M,
                        NB-IoT, and EC-GSM-IoT.
                    </p>
                </div>

                <div className="col-md-4 mb-4">
                    <h5
                        className="d-flex align-items-center text-white"
                        style={{ fontSize: "clamp(16px, 2.5vw, 20px)" }}
                    >
                        <img src={deviceIcon} alt="Gateways" className="icon-left" />
                        Gateways
                    </h5>
                    <p
                        className="text-white"
                        style={{
                            fontSize: "clamp(13px, 2.2vw, 16px)",
                            lineHeight: "150%",
                        }}
                    >
                        Gateways connect devices to the cloud to securely collect, aggregate, and
                        transmit data. After data is processed by the cloud application, the
                        gateway sends actionable commands back to the actuators.
                    </p>
                </div>

                <div className="col-md-4 mb-4">
                    <h5
                        className="d-flex align-items-center text-white"
                        style={{ fontSize: "clamp(16px, 2.5vw, 20px)" }}
                    >
                        <img src={deviceIcon} alt="Cloud" className="icon-left" />
                        Cloud Infrastructure
                    </h5>
                    <p
                        className="text-white"
                        style={{
                            fontSize: "clamp(13px, 2.2vw, 16px)",
                            lineHeight: "150%",
                        }}
                    >
                        Serves as the backbone for many projects, providing the tools and methods
                        to process data and make decisions prescribed by its algorithms or AI/ML
                        capabilities. These decisions are sent back to the actuators, completing
                        the connectivity process.
                    </p>
                </div>

                <div className="col-md-4 mb-4">
                    <h5
                        className="d-flex align-items-center text-white"
                        style={{ fontSize: "clamp(16px, 2.5vw, 20px)" }}
                    >
                        <img src={deviceIcon} alt="Edge" className="icon-left" />
                        Edge Computing
                    </h5>
                    <p
                        className="text-white"
                        style={{
                            fontSize: "clamp(13px, 2.2vw, 16px)",
                            lineHeight: "150%",
                        }}
                    >
                        Often combined with gateways, edge computing devices make decisions without
                        connecting to the cloud. The algorithm deployed on the edge device is
                        created by a cloud-based back-end solution and can operate in a local
                        environment when there is no stable internet connection or when data
                        security requires a private network.
                    </p>
                </div>

                <div className="col-md-4 mb-4">
                    <h5
                        className="d-flex align-items-center text-white"
                        style={{ fontSize: "clamp(16px, 2.5vw, 20px)" }}
                    >
                        <img src={deviceIcon} alt="Applications" className="icon-left" />
                        End-User Applications
                    </h5>
                    <p
                        className="text-white"
                        style={{
                            fontSize: "clamp(13px, 2.2vw, 16px)",
                            lineHeight: "150%",
                        }}
                    >
                        Allow business users and customers to interact with a system, analyze its
                        behavior, and make necessary adjustments to algorithms. Desktop, mobile,
                        and web applications are the most common ways to create intuitive and
                        interactive user interfaces.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default IotArchitecture;
