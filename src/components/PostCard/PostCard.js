import axios from "axios"
import VoteUp from "../../images/up-vote.svg"
import VoteDown from "../../images/down-vote.svg"
import Comment from "../../images/comment.svg"
import { goToCommentsPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { BASE_URL, TOKEN_NAME } from "../../constants/constants";
import { CardFooter, PostCardContainer } from "./PostCard.styled";

export default function PostCard(props) {
  const navigate = useNavigate()

  const { post, fetchUpdate } = props

  const {
    id,
    creator,
    content,
    votesCount,
    commentsCount
  } = post

  const votePost = (e, vote) => {
    e.stopPropagation()

    const body = {
      postId: id,
      vote: vote
    }

    const axiosConfig = {
      headers: {
        Authorization: window.localStorage.getItem(TOKEN_NAME)
      }
    }

    axios.put(BASE_URL + `/posts/${id}/vote`, body, axiosConfig)
      .then(res => {
        fetchUpdate()
      })
      .catch(err => console.log(err))
  }

  return (
    <PostCardContainer onClick={() => goToCommentsPage(navigate, id)}>
      <p>Enviado por: {creator.nickname}</p>

      <h1>{content}</h1>

      <CardFooter>
        <section className="vote-info">
          <button onClick={(e) => votePost(e, true)}>
            <img className="vote-icon" src={VoteUp} alt="Vote up" />
          </button>

          <span>{votesCount}</span>

          <button onClick={(e) => votePost(e, false)}>
            <img className="vote-icon" src={VoteDown} alt="Vote down" />
          </button>
        </section>

        <section className="comment-info">
          <img className="comment-icon" src={Comment} alt="Ícone de comentários" />
          <span>{commentsCount}</span>
        </section>
      </CardFooter>
    </PostCardContainer>
  );
}