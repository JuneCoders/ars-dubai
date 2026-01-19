import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FadeIn from '../../components/animations/FadeIn';
import SlideIn from '../../components/animations/SlideIn';
import styles from './BlogDetail.module.css';

const BlogDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [readingProgress, setReadingProgress] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  // Mock data - in real app, this would come from API
  const articlesData = {
    1: {
      id: 1,
      title: 'The Future of AI in Logistics: 2024 Predictions',
      excerpt: 'How artificial intelligence is revolutionizing supply chain management, predictive analytics, and route optimization.',
      content: `
        <h2>The AI Revolution in Logistics</h2>
        <p>The logistics industry is undergoing a massive transformation driven by artificial intelligence. From predictive analytics to autonomous vehicles, AI is reshaping how goods move around the world.</p>
        
        <h3>Predictive Analytics for Supply Chain Optimization</h3>
        <p>AI algorithms can now predict demand patterns with 95% accuracy, helping companies optimize inventory levels and reduce waste. Machine learning models analyze historical data, weather patterns, and market trends to forecast demand months in advance.</p>
        
        <blockquote>
          "AI-powered predictive analytics is reducing supply chain costs by up to 30% while improving delivery accuracy by 25%"
        </blockquote>
        
        <h3>Autonomous Vehicles and Drones</h3>
        <p>The rise of autonomous trucks and delivery drones is revolutionizing last-mile delivery. These technologies not only reduce labor costs but also improve safety and efficiency.</p>
        
        <h3>Smart Warehousing</h3>
        <p>AI-powered robots in warehouses can sort, pick, and pack items with unprecedented speed and accuracy. Computer vision systems track inventory in real-time, reducing errors by 99.9%.</p>
        
        <h2>Key Trends for 2024</h2>
        <ul>
          <li>AI-driven route optimization reducing fuel consumption by 15%</li>
          <li>Predictive maintenance preventing 80% of equipment failures</li>
          <li>Blockchain + AI for transparent supply chains</li>
          <li>Natural Language Processing for automated customer service</li>
        </ul>
        
        <h2>Implementation Challenges</h2>
        <p>While the benefits are clear, companies face challenges in AI adoption including data quality, integration costs, and talent shortages. Successful implementation requires careful planning and phased rollout.</p>
      `,
      author: {
        name: 'Michael Rodriguez',
        role: 'CEO & Founder',
        bio: '20+ years in logistics, former VP at FedEx, AI implementation expert',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop'
      },
      date: 'Jan 15, 2024',
      readTime: '8 min read',
      category: 'technology',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop',
      tags: ['AI', 'Automation', 'Future Trends', 'Technology', 'Innovation'],
      views: 1250,
      shares: 245,
      comments: 42,
      featured: true
    },
    2: {
      id: 2,
      title: 'Sustainable Logistics: Reducing Carbon Footprint',
      excerpt: 'Strategies for implementing green logistics practices and achieving carbon neutrality in supply chain operations.',
      content: `
        <h2>The Green Logistics Revolution</h2>
        <p>Sustainability is no longer optional in logistics - it's a business imperative. Companies that adopt green practices see improved efficiency, cost savings, and better brand reputation.</p>
        
        <h3>Electric Vehicle Fleets</h3>
        <p>The transition to electric vehicles is accelerating, with major logistics companies committing to 100% EV fleets by 2030. Charging infrastructure and battery technology improvements are making this transition feasible.</p>
        
        <blockquote>
          "Sustainable logistics practices can reduce operational costs by up to 20% while cutting carbon emissions by 40%"
        </blockquote>
        
        <h3>Alternative Fuels and Energy Sources</h3>
        <p>Beyond EVs, companies are exploring hydrogen fuel cells, biofuels, and solar-powered warehouses. These alternatives offer different advantages depending on the application and geography.</p>
        
        <h3>Circular Supply Chains</h3>
        <p>The move toward circular economy principles is transforming how goods are designed, used, and recycled. Reverse logistics systems are becoming increasingly sophisticated.</p>
      `,
      author: {
        name: 'Sarah Chen',
        role: 'Operations Director',
        bio: 'Supply chain expert with MBA from Stanford, sustainability advocate',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop'
      },
      date: 'Jan 10, 2024',
      readTime: '6 min read',
      category: 'sustainability',
      image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1200&auto=format&fit=crop',
      tags: ['Sustainability', 'Green Logistics', 'Eco-friendly', 'Carbon Neutral'],
      views: 890,
      shares: 156,
      comments: 28,
      featured: true
    }
  };

  const relatedArticles = [
    {
      id: 3,
      title: 'Warehouse Automation: Robots vs Humans',
      excerpt: 'Exploring the balance between automation and human labor in modern warehouse operations.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w-800&auto=format&fit=crop',
      category: 'warehousing',
      date: 'Jan 5, 2024',
      readTime: '7 min read'
    },
    {
      id: 4,
      title: 'Blockchain in Logistics: Transparency Revolution',
      excerpt: 'How blockchain technology is creating transparent, secure, and efficient supply chain networks.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop',
      category: 'technology',
      date: 'Dec 15, 2023',
      readTime: '9 min read'
    },
    {
      id: 5,
      title: 'Cold Chain Logistics for Pharmaceuticals',
      excerpt: 'Best practices for maintaining temperature control in pharmaceutical logistics.',
      image: 'https://images.unsplash.com/photo-1578911373217-41c6a7f40c9c?w=800&auto=format&fit=crop',
      category: 'specialized',
      date: 'Dec 20, 2023',
      readTime: '5 min read'
    }
  ];

  useEffect(() => {
    // Simulate API call
    const articleData = articlesData[id] || articlesData[1];
    setArticle(articleData);
    
    // Reset reading progress
    setReadingProgress(0);
    setIsBookmarked(false);
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // In real app, this would update user's bookmarks in backend
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = article?.title || '';
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      email: `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(`${text}\n\n${url}`)}`
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
      return;
    }

    window.open(shareUrls[platform], '_blank');
  };

  if (!article) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p>Loading article...</p>
      </div>
    );
  }

  return (
    <div className={styles.blogDetailPage}>
      {/* Reading Progress Bar */}
      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill}
          style={{ width: `${readingProgress}%` }}
        ></div>
      </div>

      {/* Article Header */}
      <header className={styles.articleHeader}>
        <div className={styles.container}>
          <div className={styles.articleNavigation}>
            <Link to="/blog" className={styles.backButton}>
              ← Back to Blog
            </Link>
            <div className={styles.articleActions}>
              <button 
                className={`${styles.actionButton} ${isBookmarked ? styles.active : ''}`}
                onClick={handleBookmark}
                title={isBookmarked ? 'Remove bookmark' : 'Bookmark article'}
              >
                {isBookmarked ? '🔖' : '📑'}
              </button>
              <div className={styles.shareContainer}>
                <button 
                  className={styles.actionButton}
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  title="Share article"
                >
                  📤
                </button>
                {showShareMenu && (
                  <div className={styles.shareMenu}>
                    <button onClick={() => handleShare('twitter')}>𝕏</button>
                    <button onClick={() => handleShare('linkedin')}>in</button>
                    <button onClick={() => handleShare('facebook')}>f</button>
                    <button onClick={() => handleShare('email')}>✉️</button>
                    <button onClick={() => handleShare('copy')}>📋</button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <FadeIn>
            <div className={styles.articleMetaTop}>
              <span className={styles.categoryTag}>{article.category}</span>
              <span className={styles.dot}>•</span>
              <span className={styles.date}>{article.date}</span>
              <span className={styles.dot}>•</span>
              <span className={styles.readTime}>{article.readTime}</span>
            </div>
          </FadeIn>

          <SlideIn delay={0.2}>
            <h1 className={styles.articleTitle}>{article.title}</h1>
          </SlideIn>

          <FadeIn delay={0.3}>
            <p className={styles.articleExcerpt}>{article.excerpt}</p>
          </FadeIn>

          <div className={styles.articleStats}>
            <FadeIn delay={0.4}>
              <div className={styles.statsGrid}>
                <div className={styles.stat}>
                  <span className={styles.statIcon}>👁️</span>
                  <span className={styles.statValue}>{article.views.toLocaleString()}</span>
                  <span className={styles.statLabel}>Views</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statIcon}>📤</span>
                  <span className={styles.statValue}>{article.shares}</span>
                  <span className={styles.statLabel}>Shares</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statIcon}>💬</span>
                  <span className={styles.statValue}>{article.comments}</span>
                  <span className={styles.statLabel}>Comments</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className={styles.heroImageContainer}>
        <img 
          src={article.image} 
          alt={article.title}
          className={styles.heroImage}
          loading="eager"
        />
        <div className={styles.imageOverlay}></div>
      </div>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.contentLayout}>
            {/* Article Content */}
            <article className={styles.articleContent}>
              <div className={styles.contentWrapper}>
                {/* Author Info */}
                <motion.div 
                  className={styles.authorCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className={styles.authorHeader}>
                    <img 
                      src={article.author.avatar} 
                      alt={article.author.name}
                      className={styles.authorAvatar}
                    />
                    <div className={styles.authorInfo}>
                      <h3 className={styles.authorName}>{article.author.name}</h3>
                      <div className={styles.authorRole}>{article.author.role}</div>
                    </div>
                  </div>
                  <p className={styles.authorBio}>{article.author.bio}</p>
                </motion.div>

                {/* Article Body */}
                <div 
                  className={styles.articleBody}
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Tags */}
                <div className={styles.tagsContainer}>
                  <h4 className={styles.tagsTitle}>Tags:</h4>
                  <div className={styles.tagsList}>
                    {article.tags.map((tag, index) => (
                      <Link 
                        key={index}
                        to={`/blog?tag=${tag.toLowerCase()}`}
                        className={styles.tag}
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Article Actions */}
                <div className={styles.articleActionsBottom}>
                  <button className={styles.likeButton}>
                    <span className={styles.likeIcon}>👍</span>
                    Like Article
                  </button>
                  <button className={styles.commentButton}>
                    <span className={styles.commentIcon}>💬</span>
                    Add Comment
                  </button>
                </div>

                {/* Share Section */}
                <div className={styles.shareSection}>
                  <h4 className={styles.shareTitle}>Share this article:</h4>
                  <div className={styles.shareButtons}>
                    <button 
                      className={styles.shareButton}
                      onClick={() => handleShare('twitter')}
                    >
                      <span className={styles.shareIcon}>𝕏</span>
                      Twitter
                    </button>
                    <button 
                      className={styles.shareButton}
                      onClick={() => handleShare('linkedin')}
                    >
                      <span className={styles.shareIcon}>in</span>
                      LinkedIn
                    </button>
                    <button 
                      className={styles.shareButton}
                      onClick={() => handleShare('facebook')}
                    >
                      <span className={styles.shareIcon}>f</span>
                      Facebook
                    </button>
                    <button 
                      className={styles.shareButton}
                      onClick={() => handleShare('copy')}
                    >
                      <span className={styles.shareIcon}>📋</span>
                      Copy Link
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              {/* Table of Contents */}
              <div className={styles.tocWidget}>
                <h3 className={styles.tocTitle}>Table of Contents</h3>
                <nav className={styles.tocNav}>
                  <a href="#ai-revolution" className={styles.tocLink}>
                    <span className={styles.tocBullet}>•</span>
                    AI Revolution in Logistics
                  </a>
                  <a href="#predictive-analytics" className={styles.tocLink}>
                    <span className={styles.tocBullet}>•</span>
                    Predictive Analytics
                  </a>
                  <a href="#autonomous-vehicles" className={styles.tocLink}>
                    <span className={styles.tocBullet}>•</span>
                    Autonomous Vehicles
                  </a>
                  <a href="#smart-warehousing" className={styles.tocLink}>
                    <span className={styles.tocBullet}>•</span>
                    Smart Warehousing
                  </a>
                  <a href="#2024-trends" className={styles.tocLink}>
                    <span className={styles.tocBullet}>•</span>
                    2024 Trends
                  </a>
                  <a href="#challenges" className={styles.tocLink}>
                    <span className={styles.tocBullet}>•</span>
                    Implementation Challenges
                  </a>
                </nav>
              </div>

              {/* Newsletter */}
              <div className={styles.newsletterWidget}>
                <div className={styles.newsletterIcon}>📧</div>
                <h3 className={styles.newsletterTitle}>Stay Updated</h3>
                <p className={styles.newsletterText}>
                  Get more logistics insights like this delivered to your inbox
                </p>
                <form className={styles.newsletterForm}>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className={styles.newsletterInput}
                  />
                  <button type="submit" className={styles.newsletterButton}>
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Popular Tags */}
              <div className={styles.tagsWidget}>
                <h3 className={styles.widgetTitle}>Popular Tags</h3>
                <div className={styles.tagsList}>
                  {article.tags.map((tag, index) => (
                    <Link 
                      key={index}
                      to={`/blog?tag=${tag.toLowerCase()}`}
                      className={styles.tag}
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Reading Time */}
              <div className={styles.readingTimeWidget}>
                <div className={styles.timeIcon}>⏱️</div>
                <div className={styles.timeContent}>
                  <div className={styles.timeValue}>{article.readTime}</div>
                  <div className={styles.timeLabel}>Reading Time</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Related Articles */}
      <section className={styles.relatedSection}>
        <div className={styles.container}>
          <FadeIn>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.highlight}>Related</span> Articles
              </h2>
              <p className={styles.sectionSubtitle}>
                Continue reading more about logistics and supply chain
              </p>
            </div>
          </FadeIn>

          <div className={styles.relatedGrid}>
            {relatedArticles.map((related, index) => (
              <motion.article
                key={related.id}
                className={styles.relatedCard}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Link to={`/blog/${related.id}`} className={styles.relatedLink}>
                  <div className={styles.relatedImage}>
                    <img 
                      src={related.image} 
                      alt={related.title}
                      loading="lazy"
                    />
                    <div className={styles.categoryBadge}>
                      {related.category}
                    </div>
                  </div>
                  <div className={styles.relatedContent}>
                    <div className={styles.relatedMeta}>
                      <span className={styles.relatedDate}>{related.date}</span>
                      <span className={styles.dot}>•</span>
                      <span className={styles.relatedReadTime}>{related.readTime}</span>
                    </div>
                    <h3 className={styles.relatedTitle}>{related.title}</h3>
                    <p className={styles.relatedExcerpt}>{related.excerpt}</p>
                    <div className={styles.readMore}>
                      Read Article →
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className={styles.commentsSection}>
        <div className={styles.container}>
          <FadeIn>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.highlight}>Comments</span> ({article.comments})
              </h2>
              <p className={styles.sectionSubtitle}>
                Join the discussion and share your thoughts
              </p>
            </div>
          </FadeIn>

          <div className={styles.commentsContainer}>
            {/* Comment Form */}
            <div className={styles.commentForm}>
              <div className={styles.commentFormHeader}>
                <div className={styles.userAvatar}>👤</div>
                <h3 className={styles.formTitle}>Add your comment</h3>
              </div>
              <form className={styles.form}>
                <textarea 
                  placeholder="Share your thoughts on this article..."
                  className={styles.commentInput}
                  rows="4"
                ></textarea>
                <div className={styles.formActions}>
                  <button type="submit" className={styles.submitButton}>
                    Post Comment
                  </button>
                  <div className={styles.formInfo}>
                    Your email will not be published
                  </div>
                </div>
              </form>
            </div>

            {/* Sample Comments */}
            <div className={styles.commentsList}>
              <div className={styles.comment}>
                <div className={styles.commentHeader}>
                  <div className={styles.commenterAvatar}>JD</div>
                  <div className={styles.commenterInfo}>
                    <div className={styles.commenterName}>John Davis</div>
                    <div className={styles.commentDate}>2 days ago</div>
                  </div>
                </div>
                <p className={styles.commentText}>
                  Great insights on AI in logistics! We've implemented similar predictive analytics
                  in our supply chain and saw a 25% reduction in inventory costs.
                </p>
                <div className={styles.commentActions}>
                  <button className={styles.commentAction}>👍 12</button>
                  <button className={styles.commentAction}>Reply</button>
                </div>
              </div>

              <div className={styles.comment}>
                <div className={styles.commentHeader}>
                  <div className={styles.commenterAvatar}>MP</div>
                  <div className={styles.commenterInfo}>
                    <div className={styles.commenterName}>Maria Peterson</div>
                    <div className={styles.commentDate}>1 week ago</div>
                  </div>
                </div>
                <p className={styles.commentText}>
                  The section on autonomous vehicles was particularly insightful. 
                  We're piloting drone delivery in rural areas - would love to share our findings.
                </p>
                <div className={styles.commentActions}>
                  <button className={styles.commentAction}>👍 8</button>
                  <button className={styles.commentAction}>Reply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <FadeIn>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                Want More Logistics Insights?
              </h2>
              <p className={styles.ctaText}>
                Subscribe to our newsletter for weekly updates on industry trends, 
                expert analysis, and innovative solutions.
              </p>
              
              <div className={styles.ctaActions}>
                <Link to="/blog" className={styles.primaryButton}>
                  Browse All Articles
                </Link>
                <Link to="/contact" className={styles.secondaryButton}>
                  Contact Our Experts
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <div className={styles.floatingActions}>
        <button 
          className={styles.floatingButton}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Back to top"
        >
          ↑
        </button>
        <button 
          className={`${styles.floatingButton} ${isBookmarked ? styles.active : ''}`}
          onClick={handleBookmark}
          title={isBookmarked ? 'Remove bookmark' : 'Bookmark article'}
        >
          {isBookmarked ? '🔖' : '📑'}
        </button>
      </div>
    </div>
  );
};

export default BlogDetail;