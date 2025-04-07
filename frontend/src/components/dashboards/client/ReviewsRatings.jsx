import { useState } from "react";

const ReviewsRatings = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    expert: "",
    rating: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      ...formData,
      id: Date.now(),
      date: new Date().toLocaleDateString(),
    };
    setReviews([...reviews, newReview]);
    setFormData({ expert: "", rating: "", comment: "" });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Reviews & Ratings</h2>

      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          type="text"
          name="expert"
          placeholder="Expert Name"
          value={formData.expert}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Rating</option>
          {[1, 2, 3, 4, 5].map((r) => (
            <option key={r} value={r}>{r} Star{r > 1 && "s"}</option>
          ))}
        </select>
        <textarea
          name="comment"
          placeholder="Your feedback..."
          value={formData.comment}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded shadow"
        >
          Submit Review
        </button>
      </form>

      <h3 className="text-lg font-medium mb-2">Past Reviews</h3>
      {reviews.length === 0 ? (
        <p className="text-gray-500">No reviews yet.</p>
      ) : (
        <ul className="space-y-3">
          {reviews.map((review) => (
            <li key={review.id} className="border p-3 rounded shadow">
              <p><strong>Expert:</strong> {review.expert}</p>
              <p><strong>Rating:</strong> {"⭐️".repeat(review.rating)}</p>
              <p><strong>Comment:</strong> {review.comment}</p>
              <p className="text-sm text-gray-400">{review.date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewsRatings;
