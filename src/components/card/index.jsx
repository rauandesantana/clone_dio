import React from 'react';
import IconHot from "../../assets/images/feed_hot.png";
import IconComments from "../../assets/images/feed_comments.png";
import { 
    CardText,
    CardBanner, 
    CardContainer, 
    CardContent, 
    CardPreview, 
    CardImageBanner, 
    CardInfoUser,
    CardAvatar,
    CardImageAvatar,
    CardInfo,
    CardResume,
    CardReactions,
    CardReact,
} from './style';

const Card = ({banner, avatar, userName, timeInfo, title, resume, tags, hots, comments}) => {
  return (
    <CardContainer>
        <CardContent>
            <CardBanner>
                <CardImageBanner src={banner} />
            </CardBanner>
            <CardPreview>
                <CardInfoUser>
                    <CardAvatar>
                        <CardImageAvatar src={avatar} />
                    </CardAvatar>
                    <CardInfo>
                        <CardText size="18px" fontWeight="700">{userName}</CardText>
                        <CardText size="12px" fontWeight="400">{timeInfo}</CardText>
                    </CardInfo>
                </CardInfoUser>
                <CardResume>
                    <CardText size="18px" fontWeight="700">{title}</CardText>
                    <CardText size="12px" fontWeight="400" marginBottom="5px">{resume}... Leia Mais</CardText>
                    <CardText size="14px" fontWeight="500">{tags}</CardText>
                    <CardReactions>
                        <CardReact>
                            <img src={IconHot} />
                            <span>{hots}</span>
                        </CardReact>
                        <CardReact>
                            <img src={IconComments} />
                            <span>{comments}</span>
                        </CardReact>
                    </CardReactions>
                </CardResume>
            </CardPreview>
        </CardContent>
    </CardContainer>
  );
}

export default Card;