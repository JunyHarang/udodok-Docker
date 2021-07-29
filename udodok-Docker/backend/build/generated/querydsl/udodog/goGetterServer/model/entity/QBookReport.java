package udodog.goGetterServer.model.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QBookReport is a Querydsl query type for BookReport
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QBookReport extends EntityPathBase<BookReport> {

    private static final long serialVersionUID = 1849694461L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QBookReport bookReport = new QBookReport("bookReport");

    public final StringPath bookName = createString("bookName");

    public final NumberPath<Long> bookReportId = createNumber("bookReportId", Long.class);

    public final StringPath content = createString("content");

    public final DateTimePath<java.time.LocalDateTime> createdAt = createDateTime("createdAt", java.time.LocalDateTime.class);

    public final StringPath title = createString("title");

    public final QUser user;

    public QBookReport(String variable) {
        this(BookReport.class, forVariable(variable), INITS);
    }

    public QBookReport(Path<? extends BookReport> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QBookReport(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QBookReport(PathMetadata metadata, PathInits inits) {
        this(BookReport.class, metadata, inits);
    }

    public QBookReport(Class<? extends BookReport> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.user = inits.isInitialized("user") ? new QUser(forProperty("user"), inits.get("user")) : null;
    }

}

