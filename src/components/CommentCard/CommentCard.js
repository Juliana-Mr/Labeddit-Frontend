import axios from "axios"
import VoteUp from "../../images/up-vote.svg"
import VoteDown from "../../images/down-vote.svg"
import { BASE_URL, TOKEN_NAME } from "../../constants/constants";
import { CardFooter, CommentCardContainer } from "./CommentCard.styled";


export default function CommentCard(props) {
  const { comment, fetchComments } = props

  const {
    id,
    postId,
    creator,
    content,
    votesCount
  } = comment

  const voteComment = (e, vote) => {
    e.stopPropagation()

    const body = {
      commentId: id,
      vote: vote
    }

    const axiosConfig = {
      headers: {
        Authorization: window.localStorage.getItem(TOKEN_NAME)
      }
    }

    axios.put(BASE_URL + `/post/${postId}/comments/${id}/vote`, body, axiosConfig)
      .then(res => {
        fetchComments()
      })
      .catch(err => console.log(err))
  }

  return (
    <CommentCardContainer>
      <p>Enviado por: {creator.nickname}</p>

      <h1>{content}</h1>

      <CardFooter>
        <section className="vote-info">
          <button onClick={(e) => voteComment(e, true)}>
            <img className="vote-icon" src={VoteUp} alt="Vote up" />
          </button>

          <span>{votesCount}</span>

          <button onClick={(e) => voteComment(e, false)}>
            <img className="vote-icon" src={VoteDown} alt="Vote down" />
          </button>
        </section>
      </CardFooter>
    </CommentCardContainer>
  );
}