import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FadeIn from '../../components/animations/FadeIn';
import SlideIn from '../../components/animations/SlideIn';
import styles from './Blog.module.css';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Blog articles data
  const blogArticles = [
    {
      id: 1,
      title: 'The Future of AI in Logistics: 2024 Predictions',
      excerpt: 'How artificial intelligence is revolutionizing supply chain management, predictive analytics, and route optimization.',
      author: 'Michael Rodriguez',
      date: 'Jan 15, 2024',
      readTime: '8 min read',
      category: 'technology',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
      tags: ['AI', 'Automation', 'Future Trends'],
      featured: true
    },
    {
      id: 2,
      title: 'Sustainable Logistics: Reducing Carbon Footprint',
      excerpt: 'Strategies for implementing green logistics practices and achieving carbon neutrality in supply chain operations.',
      author: 'Sarah Chen',
      date: 'Jan 10, 2024',
      readTime: '6 min read',
      category: 'sustainability',
      image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&auto=format&fit=crop',
      tags: ['Sustainability', 'Green Logistics', 'Eco-friendly'],
      featured: true
    },
    {
      id: 3,
      title: 'Warehouse Automation: Robots vs Humans',
      excerpt: 'Exploring the balance between automation and human labor in modern warehouse operations.',
      author: 'James Wilson',
      date: 'Jan 5, 2024',
      readTime: '7 min read',
      category: 'warehousing',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
      tags: ['Automation', 'Robotics', 'Warehouse'],
      featured: false
    },
    {
      id: 4,
      title: 'Global Supply Chain Challenges in 2024',
      excerpt: 'Navigating geopolitical tensions, port congestions, and economic uncertainties in international logistics.',
      author: 'Lisa Thompson',
      date: 'Dec 28, 2023',
      readTime: '10 min read',
      category: 'supply-chain',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop',
      tags: ['Supply Chain', 'Global Trade', 'Challenges'],
      featured: false
    },
    {
      id: 5,
      title: 'Cold Chain Logistics for Pharmaceuticals',
      excerpt: 'Best practices for maintaining temperature control in pharmaceutical logistics and ensuring product integrity.',
      author: 'Michael Rodriguez',
      date: 'Dec 20, 2023',
      readTime: '5 min read',
      category: 'specialized',
      image: 'https://images.unsplash.com/photo-1578911373217-41c6a7f40c9c?w=800&auto=format&fit=crop',
      tags: ['Pharma', 'Cold Chain', 'Compliance'],
      featured: false
    },
    {
      id: 6,
      title: 'Blockchain in Logistics: Transparency Revolution',
      excerpt: 'How blockchain technology is creating transparent, secure, and efficient supply chain networks.',
      author: 'James Wilson',
      date: 'Dec 15, 2023',
      readTime: '9 min read',
      category: 'technology',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop',
      tags: ['Blockchain', 'Security', 'Transparency'],
      featured: false
    },
    {
      id: 7,
      title: 'E-commerce Fulfillment: Speed vs Cost',
      excerpt: 'Optimizing last-mile delivery for e-commerce businesses while maintaining profitability.',
      author: 'Sarah Chen',
      date: 'Dec 10, 2023',
      readTime: '6 min read',
      category: 'delivery',
      image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&auto=format&fit=crop',
      tags: ['E-commerce', 'Last Mile', 'Fulfillment'],
      featured: false
    },
    {
      id: 8,
      title: 'Risk Management in International Shipping',
      excerpt: 'Comprehensive guide to managing risks, insurance, and compliance in global shipping operations.',
      author: 'Lisa Thompson',
      date: 'Dec 5, 2023',
      readTime: '8 min read',
      category: 'compliance',
      image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=800&auto=format&fit=crop',
      tags: ['Risk Management', 'Insurance', 'Compliance'],
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Topics', icon: '📚', count: 8 },
    { id: 'technology', name: 'Technology', icon: '🤖', count: 2 },
    { id: 'sustainability', name: 'Sustainability', icon: '🌱', count: 1 },
    { id: 'warehousing', name: 'Warehousing', icon: '🏭', count: 1 },
    { id: 'supply-chain', name: 'Supply Chain', icon: '🔗', count: 1 },
    { id: 'delivery', name: 'Delivery', icon: '📦', count: 1 },
    { id: 'compliance', name: 'Compliance', icon: '📋', count: 1 },
    { id: 'specialized', name: 'Specialized', icon: '⭐', count: 1 }
  ];

  const popularTags = [
    'AI', 'Automation', 'Sustainability', 'Supply Chain', 'E-commerce',
    'Blockchain', 'Cold Chain', 'Last Mile', 'Warehouse', 'Technology'
  ];

  const featuredArticles = blogArticles.filter(article => article.featured);
  const filteredArticles = blogArticles.filter(article => {
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.blogPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <div className={styles.floatingElements}>
            <div className={styles.floatingElement}></div>
            <div className={styles.floatingElement}></div>
            <div className={styles.floatingElement}></div>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <FadeIn delay={0.2}>
              <div className={styles.heroBadge}>
                <span className={styles.badgeIcon}>📝</span>
                Logistics Insights & Trends
              </div>
            </FadeIn>
            
            <SlideIn delay={0.3}>
              <h1 className={styles.heroTitle}>
                Logistics <span className={styles.gradientText}>Insights</span>
                <br />
                & Industry Updates
              </h1>
            </SlideIn>
            
            <FadeIn delay={0.4}>
              <p className={styles.heroSubtitle}>
                Expert analysis, industry trends, and innovative solutions 
                for modern supply chain and logistics challenges.
              </p>
            </FadeIn>

            {/* Search Bar */}
            <FadeIn delay={0.5}>
              <div className={styles.searchContainer}>
                <div className={styles.searchBox}>
                  <span className={styles.searchIcon}>🔍</span>
                  <input
                    type="text"
                    placeholder="Search articles, topics, or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={styles.searchInput}
                  />
                  {searchTerm && (
                    <button 
                      className={styles.clearButton}
                      onClick={() => setSearchTerm('')}
                    >
                      ✕
                    </button>
                  )}
                </div>
                <button className={styles.searchButton}>
                  Search
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className={styles.featuredSection}>
          <div className={styles.container}>
            <FadeIn>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.highlight}>Featured</span> Articles
                </h2>
                <p className={styles.sectionSubtitle}>
                  Top insights and must-reads from our experts
                </p>
              </div>
            </FadeIn>

            <div className={styles.featuredGrid}>
              {featuredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  className={styles.featuredCard}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className={styles.featuredImage}>
                    <img 
                      src={article.image} 
                      alt={article.title}
                      loading="lazy"
                    />
                    <div className={styles.featuredBadge}>Featured</div>
                  </div>
                  <div className={styles.featuredContent}>
                    <div className={styles.articleMeta}>
                      <span className={styles.categoryTag}>{article.category}</span>
                      <span className={styles.readTime}>{article.readTime}</span>
                    </div>
                    <h3 className={styles.articleTitle}>{article.title}</h3>
                    <p className={styles.articleExcerpt}>{article.excerpt}</p>
                    <div className={styles.articleFooter}>
                      <div className={styles.authorInfo}>
                        <div className={styles.authorInitials}>
                          {article.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className={styles.authorName}>{article.author}</div>
                          <div className={styles.articleDate}>{article.date}</div>
                        </div>
                      </div>
                      <Link to={`/blog/${article.id}`} className={styles.readMore}>
                        Read Article →
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className={styles.mainSection}>
        <div className={styles.container}>
          <div className={styles.blogLayout}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
              {/* Categories */}
              <div className={styles.sidebarWidget}>
                <h3 className={styles.widgetTitle}>Categories</h3>
                <div className={styles.categoriesList}>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`${styles.categoryItem} ${activeCategory === category.id ? styles.active : ''}`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      <div className={styles.categoryInfo}>
                        <span className={styles.categoryIcon}>{category.icon}</span>
                        <span className={styles.categoryName}>{category.name}</span>
                      </div>
                      <span className={styles.categoryCount}>{category.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className={styles.sidebarWidget}>
                <h3 className={styles.widgetTitle}>Popular Tags</h3>
                <div className={styles.tagsContainer}>
                  {popularTags.map((tag) => (
                    <button
                      key={tag}
                      className={styles.tag}
                      onClick={() => setSearchTerm(tag)}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className={styles.newsletterWidget}>
                <div className={styles.newsletterIcon}>📧</div>
                <h3 className={styles.newsletterTitle}>Stay Updated</h3>
                <p className={styles.newsletterText}>
                  Get the latest logistics insights delivered to your inbox
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

              {/* Recent Posts */}
              <div className={styles.sidebarWidget}>
                <h3 className={styles.widgetTitle}>Recent Posts</h3>
                <div className={styles.recentPosts}>
                  {blogArticles.slice(0, 3).map((article) => (
                    <Link key={article.id} to={`/blog/${article.id}`} className={styles.recentPost}>
                      <div className={styles.recentImage}>
                        <img src={article.image} alt={article.title} />
                      </div>
                      <div className={styles.recentContent}>
                        <h4 className={styles.recentTitle}>{article.title}</h4>
                        <div className={styles.recentMeta}>
                          <span>{article.date}</span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

            {/* Articles Grid */}
            <main className={styles.articlesGrid}>
              <div className={styles.articlesHeader}>
                <h2 className={styles.articlesTitle}>
                  {searchTerm ? 'Search Results' : 'Latest Articles'}
                  {activeCategory !== 'all' && (
                    <span className={styles.categoryFilter}>
                      in {categories.find(c => c.id === activeCategory)?.name}
                    </span>
                  )}
                </h2>
                <div className={styles.resultsCount}>
                  {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'} found
                </div>
              </div>

              {filteredArticles.length > 0 ? (
                <div className={styles.articlesContainer}>
                  {filteredArticles.map((article, index) => (
                    <motion.article
                      key={article.id}
                      className={styles.articleCard}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                    >
                      <Link to={`/blog/${article.id}`} className={styles.articleLink}>
                        <div className={styles.articleImage}>
                          <img 
                            src={article.image} 
                            alt={article.title}
                            loading="lazy"
                          />
                          <div className={styles.imageOverlay}></div>
                          <div className={styles.categoryBadge}>
                            {article.category}
                          </div>
                        </div>
                        <div className={styles.articleContent}>
                          <div className={styles.articleMeta}>
                            <span className={styles.articleDate}>{article.date}</span>
                            <span className={styles.dot}>•</span>
                            <span className={styles.readTime}>{article.readTime}</span>
                          </div>
                          <h3 className={styles.articleTitle}>{article.title}</h3>
                          <p className={styles.articleExcerpt}>{article.excerpt}</p>
                          
                          <div className={styles.articleTags}>
                            {article.tags.map((tag) => (
                              <span key={tag} className={styles.tag}>{tag}</span>
                            ))}
                          </div>
                          
                          <div className={styles.articleFooter}>
                            <div className={styles.authorInfo}>
                              <div className={styles.authorAvatar}>
                                {article.author.split(' ').map(n => n[0]).join('')}
                              </div>
                              <div className={styles.authorDetails}>
                                <div className={styles.authorName}>{article.author}</div>
                                <div className={styles.articleStats}>
                                  <span className={styles.stat}>📖 Read</span>
                                </div>
                              </div>
                            </div>
                            <span className={styles.readMore}>Read →</span>
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <div className={styles.noResults}>
                  <div className={styles.noResultsIcon}>🔍</div>
                  <h3>No articles found</h3>
                  <p>
                    {searchTerm ? `No results for "${searchTerm}"` : 'No articles in this category'}
                  </p>
                  <button 
                    className={styles.resetButton}
                    onClick={() => {
                      setActiveCategory('all');
                      setSearchTerm('');
                    }}
                  >
                    View All Articles
                  </button>
                </div>
              )}

              {/* Pagination */}
              {filteredArticles.length > 0 && (
                <div className={styles.pagination}>
                  <button className={styles.paginationButton} disabled>
                    ← Previous
                  </button>
                  <div className={styles.paginationNumbers}>
                    <button className={`${styles.pageNumber} ${styles.active}`}>1</button>
                    <button className={styles.pageNumber}>2</button>
                    <button className={styles.pageNumber}>3</button>
                    <span className={styles.pageDots}>...</span>
                    <button className={styles.pageNumber}>8</button>
                  </div>
                  <button className={styles.paginationButton}>
                    Next →
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <FadeIn>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                Want to Contribute to Our Blog?
              </h2>
              <p className={styles.ctaText}>
                Share your logistics expertise with our global audience of professionals
              </p>
              
              <div className={styles.ctaButtons}>
                <button className={styles.primaryButton}>
                  Submit Article
                </button>
                <Link to="/contact" className={styles.secondaryButton}>
                  Contact Editors
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Blog;