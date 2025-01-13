import React, { useState } from 'react';

const addCommentAsync = async (newComment: string): Promise<void> => {
 
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Comment added:', newComment); 
      resolve();
    }, 1000); 
  });
};

const CommentsSection = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  
  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };


  const handleAddComment = async () => {
    if (newComment.trim()) {
      setIsSubmitting(true);
      try {
       
        await addCommentAsync(newComment);

        
        setComments((prevComments) => [...prevComments, newComment]);
        setNewComment('');
      } catch (error) {
        console.error('Error adding comment:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold">Comments</h2>
      <input
        type="text"
        value={newComment}
        onChange={handleCommentChange}
        placeholder="Add a comment"
        className="p-2 border rounded mt-2 w-full"
      />

      <button
        onClick={handleAddComment}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        disabled={isSubmitting} 
      >
        {isSubmitting ? 'Adding...' : 'Add Comment'}
      </button>

      <div className="mt-4">
        {comments.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          comments.map((comment, index) => (
            <div key={index} className="p-2 border-b">{comment}</div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentsSection;
