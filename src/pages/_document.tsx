import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Plataforma de inteligência do setor bancário brasileiro com análises e benchmarks de 2.000+ instituições financeiras reguladas pelo BACEN." />
        <meta name="keywords" content="banco, bancário, BACEN, inteligência, análise, benchmark, instituições financeiras, Brasil" />
        <meta name="author" content="Banco Insights" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Banco Insights 2.0 - Inteligência Bancária" />
        <meta property="og:description" content="Plataforma de inteligência do setor bancário brasileiro" />
        <meta property="og:site_name" content="Banco Insights" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Banco Insights 2.0 - Inteligência Bancária" />
        <meta name="twitter:description" content="Plataforma de inteligência do setor bancário brasileiro" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}