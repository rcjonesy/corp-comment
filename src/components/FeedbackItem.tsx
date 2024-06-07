import { TriangleUpIcon } from "@radix-ui/react-icons";


//defining types for the data we will be working with
type FeedbackItem = {
  upVoteCount: number;
  badgeLetter: string;
  companyName: string;
  text: string;
  daysAgo: number;
};

//This type describes the props that the FeedbackItem component expects. It expects a single prop called feedbackItem which is of type FeedbackItem.
type FeedbackItemProps = { feedbackItem: FeedbackItem };

export default function FeedbackItem({ feedbackItem }: FeedbackItemProps) {
    console.log(feedbackItem)
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{feedbackItem?.upvoteCount}</span>
      </button>
      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>
      <div>
        <p>{feedbackItem.companyName}</p>
        <p>{feedbackItem.text}</p>
      </div>
      <p>4d</p>
    </li>
  );
}
