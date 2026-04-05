import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Home() {
  async function testSupabase() {
    const { data, error } = await supabase.from('teste').select('*');
    console.log('Data:', data, 'Error:', error);
    alert('Veja o console do navegador para resultado do Supabase!');
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>RagnaUP - Teste do Site</h1>
      <p>Este é um site mínimo para testar o Supabase.</p>
      <button onClick={testSupabase} style={{ padding: '1rem', marginTop: '1rem' }}>
        Testar Supabase
      </button>
    </div>
  );
}
