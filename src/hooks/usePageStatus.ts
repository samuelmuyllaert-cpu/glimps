import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || '',
  import.meta.env.VITE_SUPABASE_ANON_KEY || ''
);

export const usePageStatus = (slug: string) => {
  const [isActive, setIsActive] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkPageStatus = async () => {
      try {
        const { data, error } = await supabase
          .from('page_status')
          .select('is_active')
          .eq('slug', slug)
          .maybeSingle();

        if (error) throw error;
        setIsActive(data?.is_active ?? true);
      } catch (err) {
        console.error('Error checking page status:', err);
        setIsActive(true);
      } finally {
        setLoading(false);
      }
    };

    checkPageStatus();
  }, [slug]);

  return { isActive, loading };
};
