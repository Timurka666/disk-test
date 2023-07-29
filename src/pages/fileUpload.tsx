import { useEffect } from "react";
import { FileInput } from "../components/inputFiles";
import Cookies from "js-cookie";
import { redirect } from "react-router-dom";

export function Disk() {

    useEffect(() => {
        const token = Cookies.get('access');
        if (!token) {
            redirect('/')
        }
    }, []);
    return (
        <div className="upload-container">
            <FileInput />
        </div>
    )
}