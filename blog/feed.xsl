<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:atom="http://www.w3.org/2005/Atom">
  
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title><xsl:value-of select="/rss/channel/title"/> • Syndication Feed</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
        <style>
          :root {
            --bg: #020617;
            --card-bg: rgba(15, 23, 42, 0.75);
            --card-border: rgba(255, 255, 255, 0.08);
            --card-hover: rgba(30, 41, 59, 0.85);
            --text-main: #f8fafc;
            --text-muted: #94a3b8;
            --accent: #38bdf8;
            --accent-orange: #f97316;
            --purple: #c084fc;
          }

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          }

          body {
            background-color: var(--bg);
            background-image: 
              radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.12) 0%, transparent 60%),
              radial-gradient(circle at 85% 20%, rgba(249, 115, 22, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 15% 40%, rgba(192, 132, 252, 0.06) 0%, transparent 45%);
            background-attachment: fixed;
            color: var(--text-main);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            line-height: 1.6;
          }

          .feed-container {
            max-width: 960px;
            width: 100%;
            margin: 0 auto;
            padding: 2.5rem 1.5rem 5rem;
            flex: 1;
          }

          /* Top Nav */
          .feed-nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 2.5rem;
            padding-bottom: 1.25rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          }

          .brand-link {
            display: inline-flex;
            align-items: center;
            gap: 0.75rem;
            text-decoration: none;
            color: inherit;
          }

          .brand-name {
            font-size: 1.35rem;
            font-weight: 800;
            letter-spacing: -0.03em;
            color: #fff;
          }

          .brand-name span {
            background: linear-gradient(135deg, #38bdf8 0%, #c084fc 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .nav-hub-link {
            display: inline-flex;
            align-items: center;
            gap: 0.45rem;
            color: var(--text-muted);
            text-decoration: none;
            font-size: 0.88rem;
            font-weight: 600;
            padding: 0.45rem 0.95rem;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid var(--card-border);
            transition: all 0.2s ease;
          }

          .nav-hub-link:hover {
            color: #fff;
            border-color: rgba(56, 189, 248, 0.35);
            background: rgba(56, 189, 248, 0.08);
          }

          /* Hero / Callout */
          .feed-header {
            background: var(--card-bg);
            border: 1px solid var(--card-border);
            border-radius: 20px;
            padding: 2.5rem;
            margin-bottom: 3rem;
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            box-shadow: 0 16px 36px rgba(0, 0, 0, 0.35);
            position: relative;
            overflow: hidden;
          }

          .feed-header::after {
            content: '';
            position: absolute;
            top: -40%;
            right: -10%;
            width: 320px;
            height: 320px;
            background: radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%);
            pointer-events: none;
          }

          .feed-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.35rem 0.9rem;
            font-size: 0.75rem;
            font-weight: 700;
            color: #fdba74;
            background: rgba(249, 115, 22, 0.14);
            border: 1px solid rgba(249, 115, 22, 0.3);
            border-radius: 999px;
            text-transform: uppercase;
            letter-spacing: 0.75px;
            margin-bottom: 1.25rem;
          }

          h1 {
            font-size: 2.4rem;
            font-weight: 800;
            letter-spacing: -0.03em;
            line-height: 1.2;
            margin-bottom: 0.85rem;
            color: #ffffff;
          }

          .feed-desc {
            color: var(--text-muted);
            font-size: 1.05rem;
            line-height: 1.6;
            margin-bottom: 1.75rem;
            max-width: 760px;
          }

          .feed-instructions {
            background: rgba(2, 6, 23, 0.65);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            padding: 1.25rem 1.5rem;
            margin-bottom: 1.75rem;
            font-size: 0.92rem;
            color: #cbd5e1;
          }

          .feed-instructions strong {
            color: #fff;
          }

          .feed-actions {
            display: flex;
            align-items: center;
            gap: 1rem;
            flex-wrap: wrap;
          }

          .btn-copy-feed {
            display: inline-flex;
            align-items: center;
            gap: 0.55rem;
            background: #f97316;
            color: #fff;
            border: none;
            cursor: pointer;
            padding: 0.8rem 1.5rem;
            border-radius: 10px;
            font-weight: 700;
            font-size: 0.95rem;
            box-shadow: 0 8px 24px rgba(249, 115, 22, 0.35);
            transition: all 0.2s ease;
          }

          .btn-copy-feed:hover {
            background: #ea580c;
            transform: translateY(-2px);
            box-shadow: 0 12px 28px rgba(249, 115, 22, 0.45);
          }

          .btn-copy-feed.copied {
            background: #10b981;
            box-shadow: 0 8px 24px rgba(16, 185, 129, 0.35);
          }

          .feed-url-chip {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.08);
            padding: 0.75rem 1.25rem;
            border-radius: 10px;
            font-family: monospace;
            font-size: 0.88rem;
            color: #94a3b8;
            user-select: all;
          }

          /* Articles Section */
          .articles-heading {
            font-size: 1.4rem;
            font-weight: 800;
            letter-spacing: -0.02em;
            margin-bottom: 1.5rem;
            color: #fff;
            display: flex;
            align-items: center;
            gap: 0.75rem;
          }

          .items-list {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .feed-item-card {
            background: var(--card-bg);
            border: 1px solid var(--card-border);
            border-radius: 16px;
            padding: 1.85rem;
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }

          .feed-item-card:hover {
            transform: translateY(-3px);
            border-color: rgba(56, 189, 248, 0.35);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(56, 189, 248, 0.1);
            background: var(--card-hover);
          }

          .item-meta {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 0.82rem;
          }

          .item-category {
            color: #38bdf8;
            background: rgba(56, 189, 248, 0.12);
            border: 1px solid rgba(56, 189, 248, 0.25);
            padding: 0.2rem 0.65rem;
            border-radius: 999px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .item-date {
            color: var(--text-muted);
            font-weight: 500;
          }

          .item-title {
            font-size: 1.35rem;
            font-weight: 800;
            line-height: 1.3;
            letter-spacing: -0.02em;
          }

          .item-title a {
            color: #fff;
            text-decoration: none;
            transition: color 0.2s ease;
          }

          .item-title a:hover {
            color: #38bdf8;
          }

          .item-desc {
            color: #94a3b8;
            font-size: 0.96rem;
            line-height: 1.65;
          }

          .item-read-link {
            display: inline-flex;
            align-items: center;
            gap: 0.45rem;
            color: #38bdf8;
            text-decoration: none;
            font-weight: 700;
            font-size: 0.92rem;
            margin-top: 0.5rem;
            transition: gap 0.2s ease, color 0.2s ease;
          }

          .item-read-link:hover {
            color: #7dd3fc;
            gap: 0.65rem;
          }

          /* Footer */
          footer {
            margin-top: 4rem;
            padding-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.06);
            text-align: center;
            color: #64748b;
            font-size: 0.84rem;
          }

          footer a {
            color: #94a3b8;
            text-decoration: none;
            margin: 0 0.5rem;
          }

          footer a:hover {
            color: #fff;
          }
        </style>
      </head>
      <body>
        <div class="feed-container">
          <!-- Top Navigation -->
          <nav class="feed-nav">
            <a href="/blog/" class="brand-link">
              <span class="brand-name">Vantor<span>Kit</span></span>
            </a>
            <a href="/blog/" class="nav-hub-link">← Back to Blog Hub</a>
          </nav>

          <!-- Hero & Copy Button -->
          <header class="feed-header">
            <div class="feed-badge">
              <span>●</span> RSS 2.0 Syndication Feed
            </div>
            <h1>VantorKit Blog RSS Feed</h1>
            <p class="feed-desc">
              <xsl:value-of select="/rss/channel/description"/>
            </p>

            <div class="feed-instructions">
              <strong>How to subscribe:</strong> Copy this feed's URL into your favorite RSS reader (such as NetNewsWire, Feedly, Inoreader, or Daily.dev). New client-side engineering guides and privacy research will automatically appear in your feed.
            </div>

            <div class="feed-actions">
              <button type="button" id="copyFeedBtn" class="btn-copy-feed" onclick="copyFeedUrl()">
                📋 Copy Feed URL
              </button>
              <span class="feed-url-chip" id="feedUrlDisplay">https://vantorkit.com/blog/feed.xml</span>
            </div>
          </header>

          <!-- Items Stream -->
          <main>
            <h2 class="articles-heading">Available Articles &amp; Research Guides</h2>
            <div class="items-list">
              <xsl:for-each select="/rss/channel/item">
                <article class="feed-item-card">
                  <div class="item-meta">
                    <span class="item-category">
                      <xsl:value-of select="category"/>
                    </span>
                    <span class="item-date">
                      <xsl:value-of select="pubDate"/>
                    </span>
                  </div>
                  <h3 class="item-title">
                    <a href="{link}">
                      <xsl:value-of select="title"/>
                    </a>
                  </h3>
                  <p class="item-desc">
                    <xsl:value-of select="description"/>
                  </p>
                  <div>
                    <a href="{link}" class="item-read-link">
                      Read Technical Guide →
                    </a>
                  </div>
                </article>
              </xsl:for-each>
            </div>
          </main>

          <!-- Footer -->
          <footer>
            <p>© 2026 VantorKit. Fast, Private &amp; Free Web Utilities. 100% In-Browser RAM Execution.</p>
            <p style="margin-top: 0.5rem;">
              <a href="/">All 32 Utilities</a> • 
              <a href="/blog/">Engineering Blog</a> • 
              <a href="/privacy.html">Privacy Policy</a>
            </p>
          </footer>
        </div>

        <script>
          function copyFeedUrl() {
            const url = 'https://vantorkit.com/blog/feed.xml';
            const btn = document.getElementById('copyFeedBtn');
            if (navigator.clipboard &amp;&amp; navigator.clipboard.writeText) {
              navigator.clipboard.writeText(url).then(function() {
                if (btn) {
                  const orig = btn.innerHTML;
                  btn.innerHTML = '✓ Copied to Clipboard!';
                  btn.classList.add('copied');
                  setTimeout(function() {
                    btn.innerHTML = orig;
                    btn.classList.remove('copied');
                  }, 2500);
                }
              }).catch(function() {
                prompt('Copy RSS Feed URL:', url);
              });
            } else {
              prompt('Copy RSS Feed URL:', url);
            }
          }
        </script>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
