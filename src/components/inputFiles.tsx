import { useRef } from "react";
import { useActions, useAppSelector } from "../store";

export function FileInput() {
    const inputRef = useRef<any>(null);
    const {pushAFile} = useActions();
    const {files} = useAppSelector((state) => state.files)

    const onChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length && e.target.files?.length > 100) {
            alert(`${e.target.files?.length} files are not allowed. Choose from 1 to 100.`)
        }
        else if (e.target.files?.length && e.target.files?.length > 0) {
            for (let i=0; i < e.target.files.length; i++) {
                pushAFile(e.target.files.item(i) as File);
            }
        }
    }
    return (
        <>
            <input ref={inputRef}  type="file" multiple={true} id="fileInput" onChange={onChangeEvent} />
            <label
            htmlFor="fileInput"
            className="fileInput"
            onClick={(e) => {e.preventDefault()}}
            >
                <div className="text">
                    Upload your files from 1 to 100 in a time
                </div>
                <button
                className="btn"
                onClick={() => {inputRef.current.click()}}
                >
                    Upload files
                </button>
            </label>
        </>
    )
}
