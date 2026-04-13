import { createClient } from '@supabase/supabase-js'

export const runtime = 'nodejs'

export async function GET(request: Request) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  })

  const { error } = await supabase
    .from('project_heartbeat')
    .upsert({
      name: 'vercel-cron',
      last_seen: new Date().toISOString(),
    })

  if (error) {
    return Response.json(
      { ok: false, error: error.message },
      { status: 500 }
    )
  }

  return Response.json({
    ok: true,
    ranAt: new Date().toISOString(),
    userAgent: request.headers.get('user-agent'),
  })
}
