export default {
  getLeads: async () => {
    let url = 'https://ytcvwojulmzuxzfwgidu.supabase.co/rest/v1/leads?select=*&order=criado_em.desc&limit=10';
    url += '&offset=' + ((Table1.pageNo - 1) * 10);
    if (Input1.text) url += '&nome=ilike.*' + Input1.text + '*';
    if (Select1.selectedOptionValue) url += '&status=eq.' + Select1.selectedOptionValue;
    return GetLeads.run({ url });
  },

  getRowColor: (row = {}) => {
    if (!row.criado_em) return "transparent";
    const diasCriado = (new Date() - new Date(row.criado_em)) / (1000 * 60 * 60 * 24);
    if (row.valor_estimado > 50000) return "#c8f7c5";
    if (row.status === "Novo" && diasCriado > 3) return "#f7c5c5";
    return "transparent";
  }
}