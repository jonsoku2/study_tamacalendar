import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../store/actions/post';

const PostContainer = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, []);
  const renderPosts = () => !loading && posts.map(post => <div key={post.id}>{post.title}</div>);
  return <>{renderPosts()}</>;
};

const mapStateToProps = state => ({
  post: state.post,
});

export default connect(
  mapStateToProps,
  {
    getPosts,
  },
)(PostContainer);
