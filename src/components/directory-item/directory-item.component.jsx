import { useNavigate } from "react-router"

import { BackgroundImage, Body, DirectorytemContainer } from "./directory-item.styles"

const DirectoryItem = ({category}) => {
    const { imageUrl, title , route } = category
    const navigate = useNavigate()

    const onNavigateHandler = () => navigate(route)

    return (     
        <DirectorytemContainer onClick={onNavigateHandler}>
          <BackgroundImage
            imageUrlVal={imageUrl}
         />
          <Body>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </Body>
      </DirectorytemContainer>
    )
}

export default DirectoryItem