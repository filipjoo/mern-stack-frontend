import { useState } from "react"

export const ImgInput = (props) => {
    const [imageFile, setImageFile] = useState(null)
    const handleClick = async () => {
        try {
            const data = new FormData()
            data.append("file", imageFile)
            data.append("upload_preset", "q3jvt1uc")
            data.append("cloud_name", "dda0xasb5")
            const response = await fetch("https://api.cloudinary.com/v1_1/dda0xasb5/image/upload", {
                method: "POST",
                body: data
            })

            const jsonData = await response.json()
            await props.setImage(jsonData.url)
            alert("画像アップロード成功")
        } catch (error) {
            alert("画像アップロード失敗")
        }
    }
    return (
        <div className="img-input">
            <input type="file" onChange={(e) => setImageFile(e.target.files[0])} accept="image/png, image/jpg" />
            <button onClick={handleClick} disabled={!imageFile}>画像Upload</button>
        </div>
    )
    
}




