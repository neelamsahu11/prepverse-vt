import { timestamp } from 'drizzle-orm/cockroach-core';
import { int, mysqlTable, varchar,text } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
    id:int("id").autoincrement().primaryKey(),
    name : varchar("name",{length: 255}).notNull(),
    password : text("password").notNull(),
    email : varchar("email",{length:255}).notNull().unique(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().$onUpdateFn(() => new Date()).notNull(),

});
export const sessions = mysqlTable('sessions', {
    id:varchar("id",{length:255}).primaryKey(),
    userId:int("user_id").notNull().references(() => users.id, {onDelete:'cascade'}),
    userAgent:text("user_agent").notNull(),
    ip:varchar("ip",{length:255}).notNull(),
    expireAt:timestamp("expire_at").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().$onUpdateFn(() => new Date()).notNull(),

});
