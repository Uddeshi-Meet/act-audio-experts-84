import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const barData = [
  { name: "Audio", jobs: 420 },
  { name: "Tint", jobs: 380 },
  { name: "PPF", jobs: 190 },
  { name: "Remote Start", jobs: 310 },
  { name: "Safety", jobs: 150 },
  { name: "Keys", jobs: 95 },
];

const pieData = [
  { name: "Car Audio", value: 35 },
  { name: "Window Tint", value: 25 },
  { name: "Remote Start", value: 20 },
  { name: "PPF / Protection", value: 12 },
  { name: "Safety / Other", value: 8 },
];

const COLORS = [
  "hsl(27, 90%, 55%)",
  "hsl(215, 70%, 45%)",
  "hsl(27, 80%, 65%)",
  "hsl(215, 60%, 60%)",
  "hsl(220, 15%, 35%)",
];

const stats = [
  { label: "Years in Business", value: "25+" },
  { label: "Installs Completed", value: "10,000+" },
  { label: "Customer Satisfaction", value: "98%" },
  { label: "Certified Techs", value: "MECP" },
];

const StatsSection = () => {
  return (
    <section id="stats" className="py-24" style={{ background: "var(--card-gradient)" }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-heading uppercase tracking-[0.3em] text-secondary text-sm mb-3">By The Numbers</p>
          <h2 className="font-heading text-4xl md:text-5xl uppercase text-gradient-brand">Our Track Record</h2>
        </motion.div>

        {/* Stats counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-heading text-4xl md:text-5xl text-gradient-brand mb-2">{s.value}</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-surface rounded-lg p-6"
          >
            <h3 className="font-heading text-xl uppercase text-foreground mb-6">Annual Installs by Category</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={barData}>
                <XAxis dataKey="name" tick={{ fill: "hsl(215, 15%, 55%)", fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "hsl(215, 15%, 55%)", fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: "hsl(220, 18%, 12%)", border: "1px solid hsl(220, 15%, 18%)", borderRadius: 8, color: "hsl(210, 20%, 92%)" }}
                />
                <Bar dataKey="jobs" fill="hsl(27, 90%, 55%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-surface rounded-lg p-6"
          >
            <h3 className="font-heading text-xl uppercase text-foreground mb-6">Service Demand Breakdown</h3>
            <ResponsiveContainer width="100%" height={320}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  innerRadius={40}
                  dataKey="value"
                  label={({ name, percent, x, y }) => (
                    <text x={x} y={y} fill="hsl(210, 20%, 92%)" fontSize={12} textAnchor="middle" dominantBaseline="central">
                      {`${name} ${(percent * 100).toFixed(0)}%`}
                    </text>
                  )}
                  labelLine={{ stroke: "hsl(215, 15%, 35%)", strokeWidth: 1 }}
                  paddingAngle={2}
                >
                  {pieData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: "hsl(220, 18%, 12%)", border: "1px solid hsl(220, 15%, 18%)", borderRadius: 8, color: "hsl(210, 20%, 92%)" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
