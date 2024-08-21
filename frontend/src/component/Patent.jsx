import React from "react";
import {
    FaUserCircle,
    FaPhoneAlt,
    FaEnvelope,
    FaLungs,
    FaStethoscope,
    FaNotesMedical,
    FaChartBar,
} from "react-icons/fa";
import { MdTrendingUp } from "react-icons/md";

const Patient = () => {
    const patientData = {
        name: "S. Meena",
        gender: "F",
        age: 23,
        patientId: "87 20200727153457",
        phone: "8022334455",
        email: "meenarabinsachin2@gmail.com",
        affectedSide: "Bilateral",
        condition: "Ortho",
        speciality: "Osteoarthritis",
        medicalHistory: ["Hypertension", "DM", "Hypothyroidism"],
        goalReached: 40,
    };

    return (
        <div className="font-sans p-4 bg-gray-100 max-w-md mx-auto mt-2 rounded-lg shadow-lg">
            <div className="flex items-center py-4">
                <button className="text-blue-800 text-2xl mr-4">&larr;</button>
                <h2 className="text-blue-800 text-lg font-semibold">View Patient</h2>
            </div>
            <hr />

            <div className="flex justify-between items-center mt-4">
                <div>
                    <h3 className="text-xl font-semibold">
                        {patientData.name}, {patientData.gender}/{patientData.age}
                    </h3>
                    <p className="text-gray-500">Patient ID: {patientData.patientId}</p>
                </div>
                <FaUserCircle className="text-blue-800 text-5xl" />
            </div>

            <div className="bg-blue-900 p-4 rounded-lg mt-6 text-white text-center">
                <p className="font-bold">Goal Reached</p>
                <div className="flex justify-between items-center mt-4">
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-b from-yellow-600 to-yellow-300">
                        <div className="absolute inset-0 flex items-center justify-center text-2xl">
                            <p>{patientData.goalReached}%</p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2 bg-white text-blue-600 rounded px-2 py-1">
                            <p>EMG</p>
                            <FaChartBar size={20} />
                        </div>
                        <div className="flex items-center space-x-2 bg-white text-blue-600 rounded px-2 py-1">
                            <p>ROM</p>
                            <MdTrendingUp size={20} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 space-y-4">
                <div className="flex justify-between items-center">
                    <strong className="text-base">Phone no.</strong>
                    <div className="flex items-center space-x-2 text-base">
                        <FaPhoneAlt /> <span>{patientData.phone}</span>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <strong className="text-base">Mail ID</strong>
                    <div className="flex items-center space-x-2 text-base">
                        <FaEnvelope /> <span>{patientData.email}</span>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <strong className="text-base">Affected side</strong>
                    <div className="flex items-center space-x-2 text-base">
                        <FaLungs /> <span>{patientData.affectedSide}</span>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <strong className="text-base">Condition</strong>
                    <div className="flex items-center space-x-2 text-base">
                        <FaStethoscope /> <span>{patientData.condition}</span>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <strong className="text-base">Speciality</strong>
                    <div className="flex items-center space-x-2 text-base">
                        <FaNotesMedical /> <span>{patientData.speciality}</span>
                    </div>
                </div>
            </div>

            <div className="mt-6">
                <hr className="border-t border-gray-300 mb-4" />
                <div className="flex items-center space-x-2 text-lg font-bold">
                    <FaNotesMedical />
                    <span>Medical History</span>
                </div>
                <p>{patientData.medicalHistory.join(", ")}</p>
                <hr className="border-t border-gray-300 mt-4" />
            </div>
        </div>
    );
};

export default Patient;
